import React, { createContext, useState } from "react";

import api from "../services/api";

interface CurrentNaver {
  id: string;
  name: string;
  admission_date: string;
  job_role: string;
  project: string;
  birthdate: string;
  url: string;
}

interface ContextProps {
  modal: string;
  currentNaver: CurrentNaver;
  currentNaverId: string;
  setModal: (value: string) => void;
  setCurrentNaverId: (value: string) => void;
  handleNaverInfoModal: Function;
  handleDelete: Function;
}

const AppContext = createContext({} as ContextProps);

export const AppProvider: React.FC = ({ children }) => {
  const [modal, setModal] = useState("");
  const [currentNaver, setCurentNaver] = useState({} as CurrentNaver);
  const [currentNaverId, setCurrentNaverId] = useState("");

  async function handleNaverInfoModal(id: string) {
    setModal("info");

    const { data } = await api.get(`/navers/${id}`);

    setCurentNaver(data);
  }

  async function handleDelete(id: string) {
    setModal("delete");
    try {
      await api.delete(`/navers/${id}`);
      setModal("deleted");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        modal,
        currentNaver,
        currentNaverId,
        setModal,
        handleNaverInfoModal,
        handleDelete,
        setCurrentNaverId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
