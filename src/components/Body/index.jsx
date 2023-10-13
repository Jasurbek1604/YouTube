import React from "react";
import NavBar from "../NavBar";
import { Container } from "./style";
import { videos } from "../../utils/body";
import VideoCart from "../VideoCart";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 45px 20px 0 23px;
  flex-wrap: wrap;
`;

const Index = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "calc(100% - 330px)",
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
