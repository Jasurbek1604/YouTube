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

const index = () => {
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
          <Line />
        )
      )}
    </Container>
  ) : (
    <div>
      {sidebar.slice(0, 1).map(({ data }) => (
        <div>
          {data.map(({ id, name, icon }) => (
            <Box ket={id}>
              <Icon small src={icon} />
              <Name small>{name}</Name>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
};

export default index;
