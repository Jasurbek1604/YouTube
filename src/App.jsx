import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";
import Body from "./components/Body";
import SidebarComponent from "./context/sidebarContext";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <SidebarComponent>
        <SearchBar />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Body />
        </div>
      </SidebarComponent>
    </Container>
  );
}

export default App;
