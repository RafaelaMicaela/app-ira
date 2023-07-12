import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CardClient from "../../components/CardClient";
import { Container, ContainerButton, ContainerCard } from "./styles";

const ListClientes = () => {
  return (
    <Container>
       <ContainerButton>
          <Link to="/CriarClientes">
            <Button />
          </Link>
        </ContainerButton>
      
      <ContainerCard>
        <CardClient />
      </ContainerCard>
    </Container>
  );
};

export default ListClientes;
