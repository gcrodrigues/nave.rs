import React, { useContext } from "react";

import AppContext from "../../contexts/app";
import { Card } from "./styles";
import NaverButtons from "../../components/NaverButtons";

interface NaverProps {
  name: string;
  job_role: string;
  url: string;
  id: string;
}

const Naver: React.FC<NaverProps> = ({ name, job_role, url, id }) => {
  const { handleNaverInfoModal } = useContext(AppContext);
  return (
    <Card>
      <img onClick={() => handleNaverInfoModal(id)} src={url} alt="Naver" />
      <h2>{name}</h2>
      <p>{job_role}</p>
      <NaverButtons id={id} />
    </Card>
  );
};

export default Naver;
