import styled from "styled-components";

const DateBox = ({date}) => {
    return (
        <DateContainer>
            {date}
        </DateContainer>
    );
};

const DateContainer = styled.div`
  margin: 10px auto;
  font-weight: bold;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: white;
`

export default DateBox;