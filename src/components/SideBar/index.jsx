import React, { useState } from "react";
import { Container, Wrapper, Title, Items, Icon, Name, Line } from "./style";
import { sidebar } from "../../utils/sidebar";

const index = () => {
  const [data, setData] = useState([]);
  return (
    <Container>
      {sidebar.map((item) =>
        item ? (
          <Wrapper key={item.id}>
            {item.title && <Title>{item.title}</Title>}
            {item.data.map(({ id, name, icon }) => (
              <Items key={id}>
                <Icon src={icon} alt="icon" />
                <Name>{name}</Name>
              </Items>
            ))}
          </Wrapper>
        ) : (
          <Line />
        )
      )}
    </Container>
  );
};

export default index;
