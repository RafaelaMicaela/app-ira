import CardClient from "../../components/CardClient";
import { Container, ContainerCard } from "./styles";

const ListClientes = () => {
  return (
    <Container>
      <ContainerCard>
        <CardClient />
      </ContainerCard>
    </Container>
  );
};

export default ListClientes;
