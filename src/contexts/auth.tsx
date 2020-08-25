import React, { createContext, useState, useEffect, FormEvent } from "react";

import history from "../utils/history";
import { AppProvider } from "./app";
import api from "../services/api";

interface ContextProps {
  isSigned: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
  setIsSigned: (value: boolean) => void;
  handleLogin: Function;
  handleLogout: Function;
}

const AuthContext = createContext({} as ContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  const [isSigned, setIsSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setLoading(true);
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${JSON.parse(
        token
      )}`;
      setIsSigned(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin(
    e: FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data: { token },
      } = await api.post("/users/login", {
        email,
        password,
      });

      setLoading(false);
      localStorage.setItem("token", JSON.stringify(token));
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsSigned(true);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }

  function handleLogout() {
    setLoading(true);

    setIsSigned(false);
    api.defaults.headers.common["Authorization"] = undefined;
    localStorage.removeItem("token");
    history.push("/");
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isSigned,
        loading,
        setLoading,
        setIsSigned,
        handleLogin,
        handleLogout,
      }}
    >
      <AppProvider>{children}</AppProvider>
    </AuthContext.Provider>
  );
};

export default AuthContext;
