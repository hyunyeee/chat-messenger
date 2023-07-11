import styled from "styled-components";
import ChatBox from "../components/ChatBox";
import ChatInfo from "../components/ChatInfo";
import Date from "../components/Date";
import InputMsg from "../components/InputMsg";

const Chatting = () => {
    return (
            <ChattingWrapper>
                <ChatInfo />
                <ChattingContainer>
                    <Date />
                    {/*todo 나 / 상대 구분, 위치 구분할 props 넘기기*/}
                    <ChatBox isMine={true}/>
                    <ChatBox isMine={false}/>
                    <ChatBox isMine={true}/>
                    <ChatBox isMine={true}/>
                    <ChatBox isMine={false}/>
                </ChattingContainer>
                <InputMsg />
            </ChattingWrapper>
    );
};
const ChattingWrapper = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

const ChattingContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: #f6f6f6;
  border-radius: 8px;
`

export default Chatting;