import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardTema, Container, P, Title } from "./styles";

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
