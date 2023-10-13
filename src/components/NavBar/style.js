import styled from "styled-components";

export const Contaier = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
