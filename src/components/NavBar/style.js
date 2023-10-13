import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Contaier = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  border: none;
  padding: 0 5px;
  margin-left: 15px;
  background: #fff;
`;

export const Button = styled(NavLink)`
  transition: 0.4s;
  text-decoration: none;
  background-color: rgb(151, 151, 151);
  color: #fff;
  border: 1px solid rgb(151, 151, 151);
  padding: 5px 10px;
  border-radius: 8px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
  &:active,
  &:hover {
    background: black;
  }
`;
