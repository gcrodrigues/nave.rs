import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const SignIn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 408px;
  max-width: 448px;
  min-width: 315px;

  padding: 4rem 3.2rem;
  border: 0.1rem solid #212121;

  div {
    width: 100%;

    display: flex;
    flex-direction: column;

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
  }

  img {
    width: 55%;
    align-self: center;
  }

  button {
    background-color: #212121;
    color: #fff;
    font-weight: 600;
    line-height: 2.4rem;
    font-size: 1.4rem;

    padding: 1rem;
    border: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${lighten(0.03, "#212121")};
    }
  }
`;
