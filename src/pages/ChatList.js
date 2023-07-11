import styled from "styled-components";

const ChatList = () => {
    return (
        <ChatListWrapper>
            채팅방 리스트
        </ChatListWrapper>
    );
};

const ChatListWrapper = styled.div`
  width: 18%;
  height: 100%;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 8px;
`

export default ChatList;