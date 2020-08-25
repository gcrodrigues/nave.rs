import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 50vw;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  background: #fff;

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

  p {
    margin: 2.4rem 0 3.3rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;

    @media (min-width: 855px) {
      flex-direction: row;
      align-self: flex-end;
      justify-content: space-between;
    }

    button {
      font-weight: 600;
      color: #fff;
      height: 4rem;
      background: #212121;
      border: 0;
      cursor: pointer;

      @media (min-width: 855px) {
        width: 17rem;
      }

      + button {
        margin-top: 1.2rem;

        @media (min-width: 855px) {
          margin-top: 0;
          margin-left: 2.4rem;
        }
      }

      &:first-child {
        color: #212121;
        background: #fff;
        border: 1px solid #212121;
      }
    }
  }
`;
