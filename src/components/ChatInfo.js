import styled from "styled-components";

const ChatInfo = ({data}) => {
    const {chatroomName, participants} = data;

    return (
        <ChatInfoWrapper>
            <ChatRoomTitle>{chatroomName} <br/></ChatRoomTitle>
            <ImgContainer>
                {participants.map(
                    ((u) =>
                        <UsersImg src={require(`../assets/${u.profileImage}`)} />
                    )
                )}
            </ImgContainer>
        </ChatInfoWrapper>
    );
};

const ChatInfoWrapper = styled.div`
  height: 100px;
`
const ChatRoomTitle = styled.p`
  font-weight: bold;
  font-size: 25px;
  padding: 10px;
`
const ImgContainer = styled.div`
  margin-left: 20px;
`
const UsersImg = styled.img`
  width: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  margin-left: 5px;
`

export default ChatInfo;