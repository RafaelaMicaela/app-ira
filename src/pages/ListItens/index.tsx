import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardIten,
  Container,
  ContainerButton,
  Icon,
  P,
  TitleIten,
} from "./styles";
import IconImg from "../../assets/IconImg.png";
import Button from "../../components/Button";

const ListItens = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/itens/"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <ContainerButton>
          <Link to="/CriarItens">
            <Button />
          </Link>
        </ContainerButton>

        <Card>
          <P>Lista de Itens</P>
        </Card>
        {data.map((item: any) => (
          <CardIten>
            <TitleIten>{item.name}</TitleIten>
            <Icon src={IconImg} alt="Icon" />
          </CardIten>
        ))}

        {/*<CardIten>
          <TitleIten>Pula-Pula</TitleIten>
        </CardIten>
        <CardIten>
          <TitleIten>Painel</TitleIten>
        </CardIten>*/}
      </Container>
    </>
  );
};

export default ListItens;
