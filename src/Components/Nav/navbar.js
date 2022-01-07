import styled from "styled-components";
import Burguer from "./burgues";

function NavBar() {
  const Nav = styled.nav`
    width: 100%;
    height: 55px;
    /* border-bottom: 2px solid #f1f1f1; */
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .logo {
      padding: 15px 0;
    }
  `;
  return (
    <Nav>
      <div className="logo">Tflix</div>
      <Burguer />
    </Nav>
  );
}

export default NavBar;
