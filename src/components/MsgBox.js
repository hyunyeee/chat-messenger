import styled from "styled-components";

const MsgBox = ({isMine, msg}) => {
    return (
        <MsgContainer isMine={isMine}>
            {msg}
        </MsgContainer>
    );
};

const MsgContainer = styled.div`
  min-width: 50px;
  max-width: 400px; //todo auto로 변경, maxLength 지정
  border-radius: ${(props) => props.isMine ? `8px 0 8px 8px` : `0 8px 8px 8px`};
  padding: 10px;
  background-color: ${(props) => props.isMine ? `#82d3ff` : `white`};
  background-color: ${({isMine, theme}) => isMine ? theme.colors.BLUE : `white`};

  color: ${(props) => props.isMine ? `white` : `black`};
  letter-spacing: 1px;
  line-height: 1.5;
  display: inline-block;

`

export default MsgBox;