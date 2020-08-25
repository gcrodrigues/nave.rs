import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 2.4rem;

  @media (min-width: 700px) {
  }
`;

export const Cabeçalho = styled.div`
  margin-bottom: 3.2rem;

  @media (min-width: 420px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    grid-area: title;
    font-weight: 600;
    font-size: 4rem;
    margin-bottom: 2.8rem;
    @media (min-width: 420px) {
      margin: 0;
    }
  }

  a {
    grid-area: add;

    text-align: center;
    text-decoration: none;
    background-color: #212121;
    color: #fff;
    padding: 1rem 2.5rem;

    font-weight: 600;
    font-size: 1.4rem;

    margin: 2.8rem 0 2.8rem 0;

    @media (min-width: 420px) {
      justify-self: flex-end;
      margin: 0;
    }
  }
`;

export const Navers = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2.5%;
  @media (min-width: 651px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (min-width: 1028px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
  @media (min-width: 1379px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }
`;
