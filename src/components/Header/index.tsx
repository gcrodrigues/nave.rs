import React, { useContext } from "react";

import AuthContext from "../../contexts/auth";
import { Container } from "./styles";

import logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <Container>
      <img src={logo} alt="Logo" />

      <button onClick={() => handleLogout()}>Sair</button>
    </Container>
  );
};

export default Header;
