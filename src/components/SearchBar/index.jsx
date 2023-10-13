import React from "react";
import {
  Container,
  Menu,
  Search,
  Icons,
  Burger,
  Logo,
  Keyboard,
  SearchLogo,
  Input,
  Center,
  Voice,
  Cinema,
  Ring,
  User,
} from "./style";
import menu from "../../assets/icons/menu.png";
import logo from "../../assets/icons/youtube.png";
import keyboard from "../../assets/icons/keyboard.png";
import search from "../../assets/icons/search.png";
import voice from "../../assets/icons/voice.png";
import cinema from "../../assets/icons/camera.png";
import bell from "../../assets/icons/bell.png";
import user from "../../assets/icons/user.png";

const index = () => {
  return (
    <Container>
      <Menu>
        <Burger src={menu} />
        <Logo src={logo} alt="logo" />
      </Menu>
      <Search>
        <Center>
          <Input placeholder="Search.." />
          <Keyboard src={keyboard} />
          <SearchLogo src={search} />
        </Center>
        <Voice src={voice} />
      </Search>
      <Icons>
        <Cinema src={cinema} />
        <Ring src={bell} />
        <User src={user} />
      </Icons>
    </Container>
  );
};

export default index;
