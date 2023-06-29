import { Card, CardIten, Container, Icon, P, TitleIten } from "./styles";
import IconImg from "../../assets/Icon.png"

const ListItens = () => {
  return (
    <>
      <Container>
        <Card>
          <P>Lista de Itens</P>
          < Icon src="{IconImg}" alt="Icon"/>
        </Card>
        <CardIten>
          <TitleIten>Mesa</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Cadeira</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Balões</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Fantasia</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Máscara</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Bolo Fake</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Pula-Pula</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Painel</TitleIten>
        </CardIten>
      </Container>
    </>
  );
};

export default ListItens;
