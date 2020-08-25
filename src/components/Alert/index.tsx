import React, { useContext } from "react";
import { FiX } from "react-icons/fi";

import { Container } from "./styles";
import AppContext from "../../contexts/app";

interface AlertProps {
  title: string;
  description: string;
  setModal: Function;
  deleteModal?: boolean;
}

const Alert: React.FC<AlertProps> = ({
  title,
  description,
  setModal,
  deleteModal,
}) => {
  const { handleDelete, currentNaverId } = useContext(AppContext);

  return (
    <Container>
      {setModal && (
        <button onClick={() => setModal("")}>
          <FiX size={14} color="#000" />
        </button>
      )}
      <h2>{title}</h2>
      <p>{description}</p>

      {deleteModal && (
        <div>
          <button onClick={() => setModal("")}>Cancelar</button>
          <button
            onClick={() => {
              handleDelete(currentNaverId);
            }}
          >
            Excluir
          </button>
        </div>
      )}
    </Container>
  );
};

export default Alert;
