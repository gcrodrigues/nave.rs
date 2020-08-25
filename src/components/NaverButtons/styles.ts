import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  margin-top: auto;

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.8rem;
    border-radius: 50%;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.8, "#000")};
    }

    + a {
      margin-left: 0.8rem;
    }
  }
`;
