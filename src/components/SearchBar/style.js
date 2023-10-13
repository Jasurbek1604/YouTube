import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  height: 60px;
  ${flex};
  padding: 0 25px;
`;

export const Menu = styled.div`
  width: 25%;
  ${flex};
  gap: 25px;
`;
export const Search = styled.div`
  width: 50%;
  text-align: center;
  ${flex};
  justify-content: center;
`;
export const Icons = styled.div`
  width: 25%;
  text-align: end;
  ${flex};
  justify-content: flex-end;
  gap: 18px;
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`;

export const Burger = styled.img`
  width: 20px;
  height: 2%;
  cursor: pointer;
`;

export const Center = styled.div`
  ${flex};
`;
export const Input = styled.input`
  position: relative;
  height: 35px;
  outline: none;
  width: 500px;
  border: 1px solid gainsboro;
  font-size: 15px;
  padding-left: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Keyboard = styled.img`
  width: 23px;
  height: 23px;
  transform: translateX(-150%);
`;

export const SearchLogo = styled.img`
  width: 35px;
  height: 35px;
  border: 1px solid gainsboro;
  padding: 8px;
  transform: translateX(-70%);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;

export const Voice = styled.img`
  width: 35px;
  height: 35px;
  background: gainsboro;
  cursor: pointer;
  border-radius: 50%;
  padding: 7px;
`;

const common = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const Cinema = styled.img`
  ${common}
`;
export const Ring = styled.img`
  ${common}
`;
export const User = styled.img`
  ${common}
`;
