import styled from "styled-components";
import ChatInfo from "../components/ChatInfo";
import InputMsg from "../components/InputMsg";
import ChatMessages from "../components/ChatMessages";
import ChattingData from "../assets/ChattingData.json"

const Chatting = () => {
    return (
            <ChattingWrapper>
                <ChatInfo chatroomname={ChattingData.chatroomName}/>
                <ChattingContainer>
                    <ChatMessages data={ChattingData.data} />
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