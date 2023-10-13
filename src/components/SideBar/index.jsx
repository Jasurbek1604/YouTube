import {
  Container,
  Wrapper,
  Title,
  Items,
  Icon,
  Name,
  Line,
  Box,
} from "./style";
import { sidebar } from "../../utils/sidebar";
import { useSidebarContext } from "../../context/sidebarContext";
import { useId } from "react";

const index = () => {
  const [isOpen] = useSidebarContext();
  const id = useId();
  return isOpen ? (
    <Container>
      {sidebar.map((item) =>
        item ? (
          <Wrapper key={id}>
            {item.title && <Title>{item.title}</Title>}
            {item.data.map(({ id, name, icon }) => (
              <Items key={id}>
                <Icon src={icon} alt="icon" />
                <Name>{name}</Name>
              </Items>
            ))}
          </Wrapper>
        ) : (
          <Line key={id} />
        )
      )}
    </Container>
  ) : (
    <div>
      {sidebar.slice(0, 1).map(({ data }) => (
        <div>
          {data.map(({ id, name, icon }) => (
            <Box key={id}>
              <Icon small="true" src={icon} />
              <Name small="true">{name}</Name>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
};

export default index;
