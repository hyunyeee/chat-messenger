import styled from "styled-components";
import ChatInfo from "../components/ChatInfo";
import InputMsg from "../components/InputMsg";
import ChatMessages from "../components/ChatMessages";

const Chatting = ({data}) => {
    return (
            <ChattingWrapper data={data}>
                <ChatInfo data={data}/>
                <ChattingContainer>
                    <ChatMessages data={data} />
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
  margin-top: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  background-color: ${({theme}) => theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`

export default Chatting;