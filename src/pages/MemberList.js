import styled from "styled-components";

const MemberList = () => {
    return (
        <MemberWrapper>
            현 채팅방 유저 리스트
        </MemberWrapper>
    );
};

const MemberWrapper = styled.div`
  width: 25%;
  height: 100%;
  border: 1px solid gray;
  border-radius: 8px;
`

export default MemberList;