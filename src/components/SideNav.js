import styled from "styled-components";

const SideNav = () => {
    return (
        <NavWrapper>
            Side Nav
        </NavWrapper>
    );
};

const NavWrapper = styled.div`
  width: 7%;
  padding: 10px;
  height: 100%;
  margin-right: 10px;
  border: 1px solid gray;
  border-radius: 8px;
`

export default SideNav;