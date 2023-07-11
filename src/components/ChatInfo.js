import styled from "styled-components";

const ChatInfo = () => {
    return (
        <ChatInfoWrapper>
            - 채팅방 사진 <br />
            - 채팅방 이름 <br />
            - 채팅방 인원들 프로필 사진 <br />
            - 아이콘 3개 <br />
        </ChatInfoWrapper>
    );
};

const ChatInfoWrapper = styled.div`
  height: 100px;
`

export default ChatInfo;