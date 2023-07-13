import ChatBox from "./ChatBox";
import DateBox from "./DateBox";

//todo 이전 메시지 id가 같으면 '말풍선만' 렌더링 되게
//todo 이전 메시지로부터 날짜 변화 없으면 DateBox 렌더링 X

const ChatMessages = ({data}) => {
    const {participants, messages} = data;

    // todo 로컬스토리지에서 id === DummyData에서 senderId면 isMine => true
    const MY_ID="user2";

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
                     const month = timeDate.getMonth()+1;
                     const day = timeDate.getDate();
                     const hours = timeDate.getHours();
                     const dayofweekArr = ['일', '월', '화', '수', '목', '금', '토']
                     const dayofweek = dayofweekArr[timeDate.getDay()]
                     const minutes = timeDate.getMinutes();
                     const time = hours + ":" + minutes;
                     const date = month + " . " + day + ` (${dayofweek})`

                     return(
                         <>
                             <DateBox date={date}/>
                             <ChatBox isMine={isMine}
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