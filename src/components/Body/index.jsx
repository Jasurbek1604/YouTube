import React from "react";
import NavBar from "../NavBar";
import { Container } from "./style";
import { videos } from "../../utils/body";
import VideoCart from "../VideoCart";

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
      <div
        style={{
          margin: "45px 0 0 23px",
        }}
      >
        {videos.map((item) => {
          return <VideoCart value={item} />;
        })}
      </div>
    </Container>
  );
};

export default Index;
