import React, { useContext } from "react";

import { Wrapper } from "./styles";
import Header from "../Header";
import AppContext from "../../contexts/app";
import Modal from "../Modal";

const Container: React.FC = ({ children }) => {
  const { modal } = useContext(AppContext);
  return (
    <Wrapper modal={modal}>
      <Header />
      {modal !== "" && <Modal />}
      {children}
    </Wrapper>
  );
};

export default Container;
