import ChatBox from "./ChatBox";
import DateBox from "./DateBox";

const dateCalculator = (timeDate) => {
    const month = timeDate.getMonth()+1;
    const day = timeDate.getDate();
    const hours = timeDate.getHours();
    const dayofweekArr = ['일', '월', '화', '수', '목', '금', '토']
    const dayofweek = dayofweekArr[timeDate.getDay()]
    const minutes = timeDate.getMinutes();
    const time = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`; // 2자리씩 표현
    const date = month + " . " + day + ` (${dayofweek})`
    return {
        time,
        date
    }
}

const ChatMessages = ({data}) => {
    const {participants, messages} = data;

    // todo 로컬스토리지에서 id === DummyData에서 senderId면 isMine => true
    const MY_ID="user2";
    let prevDate = null;
    let prevUser = null;

    return (
        <>
            {messages.length > 0 &&
                 messages.map((msg, index) => {
                     const isMine = (MY_ID === msg.senderId) ? true : false;
                     let username = ""
                     let profileImage = ""

                     participants.map((user) => {
                         if(msg.senderId === user.userId) {
                             username = user.username;
                             profileImage = user.profileImage;
                         }
                     })
                     const timeDate = new Date(msg.timestamp);
                     const time = dateCalculator(timeDate).time
                     const nowdate = dateCalculator(timeDate).date

                     let renderDate = true;
                     if (prevDate === null) {
                         prevDate = nowdate;
                     }
                     else if (prevDate === nowdate) {
                         renderDate = false;
                     }
                     else {
                         prevDate = nowdate;
                         renderDate = true;
                     }

                     let isSameUser = false;
                     if (prevUser === null) {
                         prevUser = msg.senderId;
                     }
                     else if (prevUser === msg.senderId) {
                         isSameUser = true;
                     }
                     else {
                         prevUser = msg.senderId;
                         isSameUser = false;
                     }

                     return(
                         <>
                             {renderDate && <DateBox date={nowdate}/>}
                             <ChatBox isMine={isMine}
                                      isSameUser={isSameUser}
                                      profileImage={profileImage}
                                      username={username}
                                      time={time}
                                      msg={msg.content}
                             />
                         </>
                     );
                })
            }
        </>
    );
};

export default ChatMessages;