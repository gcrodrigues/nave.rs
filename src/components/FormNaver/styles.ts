import styled from "styled-components";
import { lighten } from "polished";

export const Section = styled.section`
  width: 100%;
  padding-bottom: 2.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    grid-area: back;

    display: flex;
    align-items: center;

    font-size: 2.4rem;
    font-weight: 600;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 2.2rem;
      color: #000;
    }
  }
`;

export const Container = styled.form`
  width: 100%;

  @media (min-width: 900px) {
    max-width: 680px;

    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, fit-content) 60px;
    grid-template-areas:
      "back back"
      "nome cargo"
      "idade tempo"
      "projetos url"
      " .  button";
  }

  div {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    margin: 3.2rem 0;
    @media (min-width: 900px) {
      margin: 0;
    }

    label {
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.8rem;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #424242;
      padding: 1rem;
    }

    .input_nome {
      grid-area: nome;
    }
    .input_cargo {
      grid-area: cargo;
    }
    .input_idade {
      grid-area: idade;
    }
    .input_tempo {
      grid-area: tempo;
    }
    .input_projetos {
      grid-area: projetos;
    }
    .input_url {
      grid-area: url;
    }
  }
  button {
    width: 100%;
    grid-area: button;

    background-color: #212121;
    color: #fff;
    border: 0;
    padding: 1rem;

    font-weight: 600;
    line-height: 2.4rem;
    font-size: 1.4rem;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.03, "#212121")};
    }
  }
`;
