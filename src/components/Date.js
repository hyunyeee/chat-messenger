import styled from "styled-components";

const Date = () => {
    return (
        <DateContainer>
            7 . 11 (화)
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

export default Date;