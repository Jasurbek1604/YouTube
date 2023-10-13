import React from "react";
import { Contaier, Button } from "./style";
import { navbar } from "../../utils/navbar";

const index = () => {
  return (
    <Contaier>
      {navbar.map(({ id, name, path }) => (
        <Button key={id} to={path}>
          {name}
        </Button>
      ))}
    </Contaier>
  );
};

export default index;
