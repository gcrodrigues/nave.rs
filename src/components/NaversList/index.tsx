import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Container, Cabeçalho, Navers } from "./styles";
import Naver from "../Naver";
import api from "../../services/api";

interface Naver {
  id: string;
  name: string;
  job_role: string;
  url: string;
  user_id: number;
}

const NaversList: React.FC = () => {
  const [navers, setNavers] = useState<Naver[]>([]);
  useEffect(() => {
    async function fetchNavers() {
      const { data } = await api.get("/navers");

      setNavers(data);
    }

    fetchNavers();
  }, [navers]);
  console.log(navers);
  return (
    <Container>
      <Cabeçalho>
        <h1>Navers</h1>
        <Link to="/create">Adicionar Naver</Link>
      </Cabeçalho>

      <Navers>
        {navers.map((naver) => (
          <Naver
            name={naver.name}
            job_role={naver.job_role}
            key={naver.id}
            id={naver.id}
            url={naver.url}
          />
        ))}
      </Navers>
    </Container>
  );
};

export default NaversList;
