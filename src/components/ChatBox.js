import styled from "styled-components";
import MsgBox from "./MsgBox";

const ChatBox = ({isMine, isSameUser, profileImage, username, time, msg}) => {
    return (
        <ChatBoxWrapper isMine={isMine} isSameUser={isSameUser}>
            <ProfileBox isSameUser={isSameUser}>
                <Img src={require(`../assets/${profileImage}`)} alt="profileImg"/>
            </ProfileBox>
            <ContentContainer isSameUser={isSameUser}>
                <InfoContainer isMine={isMine} isSameUser={isSameUser}>
                    <UserName isSameUser={isSameUser}>{username}</UserName>
                    <TimeStamp>{time}</TimeStamp>
                </InfoContainer>
                <MsgBox isMine={isMine} isSameUser={isSameUser} msg={msg}/>
            </ContentContainer>
        </ChatBoxWrapper>
    );
};

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.isMine ? `row-reverse` : `reverse`};
`
const ContentContainer = styled.div`
  margin: ${(props) => props.isSameUser ? `5px 5px 5px 65px` : `5px`};
`
const InfoContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: ${(props) => props.isMine ? `row-reverse` : `row`};
  gap: 10px;
  justify-content:  ${(props) => props.isSameUser && `end`};
`
const ProfileBox = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  line-height: 50px;
  display: ${(props) => props.isSameUser ? `none` : `block`};
  overflow: hidden
`
const Img = styled.img`
  width: 50px;
  height: 50px;
`
const UserName = styled.p`
  font-weight: bold;
  visibility: ${(props) => props.isSameUser ? `hidden` : `visible`};
`
const TimeStamp = styled.p`
  color: dimgray;
`

export default ChatBox;