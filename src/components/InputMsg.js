import styled from "styled-components";
const InputMsg = () => {
    return (
        <InputMsgContainer>
            {/*todo 아이콘 3개*/}
            <ChatInput placeholder="Type a message" />
            <SendBtn />
        </InputMsgContainer>
    );
};

const InputMsgContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`
const ChatInput = styled.input`
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  padding-left: 10px;
  border: none;
  background-color: #f6f6f6;
  border-radius: 8px;
  height: 50px;
`
const SendBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: dodgerblue;
  border-radius: 8px;
`

export default InputMsg;