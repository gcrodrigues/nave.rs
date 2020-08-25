import React, { useContext } from "react";

import AppContext from "../../contexts/app";
import { FaTrash, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "./styles";

interface NaverButtonsProps {
  id: string;
}

const NaverButtons: React.FC<NaverButtonsProps> = ({ id }) => {
  const { setModal, setCurrentNaverId } = useContext(AppContext);

  return (
    <Container>
      <button
        onClick={() => {
          setModal("delete");
          setCurrentNaverId(id);
        }}
      >
        <FaTrash size={18} color="#000" />
      </button>
      <Link onClick={() => setCurrentNaverId(id)} to="/edit">
        <FaPen size={18} color="#000" />
      </Link>
    </Container>
  );
};

export default NaverButtons;
