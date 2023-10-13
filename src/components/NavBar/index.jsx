import React from "react";
import { Contaier, Button } from "./style";
import { categories } from "../../utils/body";

const index = () => {
  return (
    <Contaier>
      {categories.map((e) => (
        <Button>{e}</Button>
      ))}
    </Contaier>
  );
};

export default index;
