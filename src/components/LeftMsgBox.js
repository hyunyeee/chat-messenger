import styled from "styled-components";

const MsgBox = ({isMine, msg}) => {
    return (
        <MsgContainer isMine={isMine}>
            {msg}
        </MsgContainer>
    );
};

const MsgContainer = styled.div`
  width: 400px; //todo auto로 변경, maxLength 지정
  height: 50px;
  border: 1px solid gray;
  border-radius: ${(props)=>props.isMine ? `8px 0 8px 8px` : `0 8px 8px 8px`};
  padding: 5px;
`

export default MsgBox;