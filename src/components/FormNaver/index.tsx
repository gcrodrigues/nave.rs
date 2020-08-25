import React, { useState, useContext, FormEvent, ChangeEvent } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Section } from "./styles";
import api from "../../services/api";
import AppContext from "../../contexts/app";

interface FormProps {
  edit?: boolean;
}

const FormNaver: React.FC<FormProps> = ({ edit }) => {
  const { setModal, currentNaverId } = useContext(AppContext);

  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [url, setUrl] = useState("");
  const [project, setProject] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const data = {
    name,
    url,
    project,
    birthdate,
    job_role: jobRole,
    admission_date: admissionDate,
  };

  async function handleCreateNaver(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.post("/navers", data);

    setModal("create");
  }

  async function handleEditNaver(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await api.put(`/navers/${currentNaverId}`, data);

    setModal("edit");
  }

  return (
    <Section>
      <Container onSubmit={edit ? handleEditNaver : handleCreateNaver}>
        <p>
          <Link to="/home">
            <FiChevronLeft size={30} />
          </Link>
          {edit ? "Editar Naver" : "Adicionar Naver"}
        </p>
        <div className="input_nome">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            name="nome"
            value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            placeholder="Nome"
          />
        </div>
        <div className="input_cargo">
          <label htmlFor="cargo">Cargo</label>
          <input
            id="cargo"
            name="cargo"
            value={jobRole}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setJobRole(e.target.value)
            }
            placeholder="Cargo"
          />
        </div>
        <div className="input_idade">
          <label htmlFor="idade">Idade</label>
          <input
            id="idade"
            name="idade"
            value={birthdate}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setBirthdate(e.target.value)
            }
            placeholder="Idade"
          />
        </div>
        <div className="input_tempo">
          <label htmlFor="tempo">Tempo de empresa</label>
          <input
            id="tempo"
            name="tempo"
            value={admissionDate}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAdmissionDate(e.target.value)
            }
            placeholder="Tempo de empresa"
          />
        </div>
        <div className="input_projetos">
          <label htmlFor="projetos">Projetos que participou</label>
          <input
            id="projetos"
            name="projetos"
            value={project}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProject(e.target.value)
            }
            placeholder="Projeto que participou"
          />
        </div>
        <div className="input_url">
          <label htmlFor="url">URL da foto do Naver</label>
          <input
            id="url"
            name="url"
            value={url}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setUrl(e.target.value)
            }
            placeholder="URL da foto do Naver"
          />
        </div>

        <button>Enviar</button>
      </Container>
    </Section>
  );
};

export default FormNaver;
