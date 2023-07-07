import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardTema, Container, ContainerButton, P, Title } from "./styles";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

const ListTemas = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/themes/"
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
          <Link to="/CriarTemas">
            <Button />
          </Link>
        </ContainerButton>
        <Card>
          <P>Lista de Temas</P>
        </Card>
        {data.map((item: any) => (
          <CardTema>
            <Title>{item.name}</Title>
          </CardTema>
        ))}
      </Container>
    </>
  );
};

export default ListTemas;
