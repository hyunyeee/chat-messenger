import styled from "styled-components";
import SideNav from "../components/SideNav";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import MemberList from "./MemberList";

const Main = () => {
    return (
        <MainPageWrapper>
            <SideNav />
            <ChatList />
            <Chatting />
            <MemberList />
        </MainPageWrapper>
    );
};

const MainPageWrapper = styled.div`
  width: 1440px;
  height: 900px;
  display: flex;
  padding: 10px;
`

export default Main;