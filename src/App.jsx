import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <SearchBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Body />
      </div>
    </Container>
  );
}

export default App;
