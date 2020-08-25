import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const NaverModal = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  img {
    display: none;
    width: 50%;

    @media (min-width: 900px) {
      display: block;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    padding: 3rem;
    position: relative;

    h2 {
      font-size: 2.4rem;
    }

    p {
      margin: 1rem 0 2.4rem 0;
    }

    p,
    span {
      font-size: 1.6rem;
    }

    h2,
    span {
      font-weight: 600;
    }

    > button {
      position: absolute;
      top: 2.1rem;
      right: 2.1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 5px;
      border: 0;
      background: transparent;
      cursor: pointer;
    }
  }
`;
