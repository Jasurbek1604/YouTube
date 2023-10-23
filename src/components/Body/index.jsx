import React from "react";
import NavBar from "../NavBar";
import { Container } from "./style";
import { videos } from "../../utils/body";
import VideoCart from "../VideoCart";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 45px 20px 0 23px;
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 50px;
  }
`;

const Index = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "calc(100% - 305px)",
          position: "fixed",
        }}
      >
        <NavBar />
      </div>
      <Div>
        {videos.map((item) => {
          return <VideoCart value={item} />;
        })}
      </Div>
    </Container>
  );
};

export default Index;
