import React from "react";
import NavBar from "../NavBar";
import { Container } from "./style";

const Index = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "red",
        }}
      >
        <NavBar />
      </div>
    </Container>
  );
};

export default Index;
