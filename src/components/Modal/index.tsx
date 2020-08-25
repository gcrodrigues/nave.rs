import React, { useContext } from "react";
import { FiX } from "react-icons/fi";

import { Container, NaverModal } from "./styles";
import NaverButtons from "../../components/NaverButtons";
import Alert from "../../components/Alert";
import AppContext from "../../contexts/app";

interface Props {
  naverInfo?: boolean;
  deleteModal?: boolean;
  editModal?: boolean;
  createModal?: boolean;
}

const Modal: React.FC<Props> = () => {
  const { modal, setModal, currentNaver } = useContext(AppContext);

  return (
    <Container>
      {modal === "info" && (
        <NaverModal>
          <img src={currentNaver.url} alt="Naver" />

          <div>
            <button onClick={() => setModal("")}>
              <FiX size={14} color="#000" />
            </button>
            <h2>{currentNaver.name}</h2>
            <p>{currentNaver.job_role}</p>

            <span>Idade</span>
            <p>{currentNaver.birthdate}</p>

            <span>Tempo de empresa</span>
            <p>{currentNaver.admission_date}</p>

            <span>Projetos que participou</span>
            <p>{currentNaver.project}</p>

            <NaverButtons id={currentNaver.id} />
          </div>
        </NaverModal>
      )}

      {modal === "delete" && (
        <Alert
          title="Excluir Naver"
          description="Tem certeza que deseja excluir este Naver?"
          setModal={setModal}
          deleteModal
        />
      )}

      {modal === "edit" && (
        <Alert
          title="Naver atualizado"
          description="Naver atualizado com sucesso!"
          setModal={setModal}
        />
      )}

      {modal === "create" && (
        <Alert
          title="Naver criado"
          description="Naver criado com sucesso!"
          setModal={setModal}
        />
      )}

      {modal === "deleted" && (
        <Alert
          title="Naver excluído"
          description="Naver excluído com sucesso!"
          setModal={setModal}
        />
      )}
    </Container>
  );
};

export default Modal;
