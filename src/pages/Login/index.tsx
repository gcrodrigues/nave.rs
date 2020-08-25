import React, { useContext, useState, ChangeEvent, FormEvent } from "react";

import { FiLoader } from "react-icons/fi";
import AuthContext from "../../contexts/auth";
import { Container, SignIn } from "./styles";
import logo from "../../assets/images/logo.png";

const Login: React.FC = () => {
  const { loading, handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <SignIn
        onSubmit={(e: FormEvent<HTMLFormElement>) =>
          handleLogin(e, email, password)
        }
      >
        <img src={logo} alt="Logo" />
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            id="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            placeholder="E-mail"
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            placeholder="Senha"
          />
        </div>

        <button>{loading ? <FiLoader /> : "Entrar"}</button>
      </SignIn>
    </Container>
  );
};

export default Login;
