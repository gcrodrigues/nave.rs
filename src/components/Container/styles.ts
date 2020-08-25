import styled from "styled-components";

interface StyleProps {
  readonly modal: string;
}

export const Wrapper = styled.div<StyleProps>`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  overflow: ${(props) => props.modal !== "" && "hidden"};

  @media (min-width: 900px) {
    padding: 0 3.2rem;
  }
`;
