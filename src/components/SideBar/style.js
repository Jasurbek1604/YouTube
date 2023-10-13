import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 15px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
`;

export const Wrapper = styled.div`
  padding-left: 5px;
`;
export const Title = styled.div`
  padding: 0 0 5px 10px;
  font-weight: 600;
  font-size: 20px;
`;
export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 8px 12px;
  border-radius: 10px;
  width: 90%;
  margin: 1px auto;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background: gainsboro;
  }
  &:active {
    background: gray;
  }
`;
export const Icon = styled.img`
  width: ${({ small }) => (small ? "30px" : "20px")};
  height: ${({ small }) => (small ? "30px" : "20px")};
`;
export const Name = styled.div`
  font-size: ${({ small }) => (small ? "12px" : "17px")};
  font-weight: 400;
`;

export const Line = styled.div`
  border: none;
  border-bottom: 1px solid gray;
  width: 90%;
  margin: 0 auto;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  padding: 0 2px;
  margin: 20px 0;
`;
