import styled from "styled-components";
import MsgBox from "./LeftMsgBox";

const ChatBox = ({isMine}) => {
    return (
        <ChatBoxWrapper isMine={isMine}>
            <div>프로필사진</div>
            <div>유저이름</div>
            <div>시간</div>
            <MsgBox isMine={isMine}/>
            <MsgBox isMine={isMine}/>
            <MsgBox isMine={isMine}/>
        </ChatBoxWrapper>
    );
};

const ChatBoxWrapper = styled.div`
  border: 1px solid gray;
  background-color: ${(props)=>props.isMine ? `skyblue` : `pink`};
  align-self: ${(props)=>props.isMine ? `start` : `end`};
`

export default ChatBox;