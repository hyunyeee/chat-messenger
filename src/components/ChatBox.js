import styled from "styled-components";
import MsgBox from "./LeftMsgBox";

const ChatBox = ({isMine, profileImage, username, time, msg}) => {
    return (
        <ChatBoxWrapper isMine={isMine}>
            <div>{profileImage}</div>
            <div>{username}</div>
            <div>{time}</div>
            <MsgBox isMine={isMine} msg={msg}/>
        </ChatBoxWrapper>
    );
};

const ChatBoxWrapper = styled.div`
  background-color: ${(props)=>props.isMine ? `pink` : `skyblue`};
  align-self: ${(props)=>props.isMine ? `end` : `start`};
`

export default ChatBox;