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
  /* padding-left: 15px; */
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
  padding: 8px;
  border-radius: 10px;
  width: 90%;
  margin: 1px auto;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: gainsboro;
  }
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
export const Name = styled.div`
  font-size: 17px;
  font-weight: 400;
`;

export const Line = styled.div`
  border: none;
  border-bottom: 1px solid gray;
  width: 90%;
  margin: 0 auto;
`;
