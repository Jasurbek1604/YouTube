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

const Index = () => {
  const [isOpen] = useSidebarContext();
  return isOpen ? (
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
          <Line key={item.id} />
        )
      )}
    </Container>
  ) : (
    <div>
      {sidebar.slice(0, 1).map(({ data }) => (
        <div key={data.id}>
          {data.map(({ id, name, icon }) => (
            <Box key={id}>
              <Icon small={"true"} src={icon} />
              <Name small={"true"}>{name}</Name>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;
