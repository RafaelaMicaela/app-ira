import Button from "../../components/Button";
import { Link } from "react-router-dom";
import {
  Card,
  CardData,
  CardHora,
  CardNome,
  Container,
  ContainerCard,
  ContainerCardHora,
  IconExcluir,
  IconEditar,
  ContainerIcon,
  ContentTema,
  NomeTema,
  ContainerButton,
} from "./styles";

import IconDeleteAluguel from "../../assets/Trash.png";
import IconEditAluguel from "../../assets/Pencil.png";
import axios from "axios";
import { useEffect, useState } from "react";

interface Aluguel {
  id: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface ListAluguel {
  number: number | undefined;
  street: string | undefined;
  complement: string | undefined;
  district: string | undefined;
  city: string | undefined;
  state: string | undefined;
  id: number;
  date: string;
  start_hours: string;
  end_hours: string;
  theme: [
    {
      id: number;
      name: string;
    }
  ];
  client: [
    {
      id: number;
      name: string;
    }
  ];
  address: [
    {
      id: number;
      street: string;
      number: number;
      complement: string;
      district: string;
      city: string;
      state: string;
    }
  ];
}

interface EditAluguel {
  id: number;
  street?: string;
  number?: number;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

const ListAluguel = () => {
  const [aluguel, setAluguel] = useState<Aluguel[]>([]);
  const [listAluguel, setListAluguel] = useState<ListAluguel[]>([]);

  const fetchAluguel = async () => {
    try {
      const response = await axios.get(
        "http://3.128.249.166:8000/api/Address/"
      );
      setAluguel(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const fetchListAluguel = async () => {
    try {
      const response = await axios.get("http://3.128.249.166:8000/api/rents/");
      setListAluguel(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAluguel();
    fetchListAluguel();
  }, []);

  const editAluguel = async ({
    street,
    number,
    complement,
    district,
    city,
    state,
    id,
  }: EditAluguel) => {
    try {
      await axios.put(`http://3.128.249.166:8000/api/Address/${id}/`, {
        street,
        number,
        complement,
        district,
        city,
        state,
      });
      fetchAluguel();
    } catch (error) {
      console.error("error ao editar: ", error);
    }
  };

  const deleteAluguel = async (aluguelId: number) => {
    try {
      await axios.delete(`http://3.128.249.166:8000/api/Address/${aluguelId}/`);
      fetchAluguel();
    } catch (error) {
      console.error("error ao deletar: ", error);
    }
  };

  return (
    <>
      <Container>
        <ContainerButton>
          <Link to="/CriarAluguel">
            <Button />
          </Link>
        </ContainerButton>

        <ContainerCard>
          {listAluguel.map((aluguel) => (
            <Card>
              <ContentTema>
                <NomeTema>{aluguel.theme}</NomeTema>
              </ContentTema>

              <ContainerIcon>
                <IconExcluir
                  onClick={() => deleteAluguel(aluguel.id)}
                  src={IconDeleteAluguel}
                />
                <Link to={`/EditAluguel/${aluguel.id}`}>
                  <IconEditar
                    onClick={() =>
                      editAluguel({
                        street: aluguel.street,
                        number: aluguel.number,
                        complement: aluguel.complement,
                        district: aluguel.district,
                        city: aluguel.city,
                        state: aluguel.state,
                        id: aluguel.id,
                      })
                    }
                    src={IconEditAluguel}
                  />
                </Link>
              </ContainerIcon>

              <CardNome>{aluguel.client}</CardNome>
              <CardData>{aluguel.date}</CardData>
              <ContainerCardHora>
                <CardHora>Inicio: {aluguel.start_hours} </CardHora>
                <CardHora>Fim: {aluguel.end_hours}</CardHora>
              </ContainerCardHora>
            </Card>
          ))}
        </ContainerCard>
      </Container>
    </>
  );
};

export default ListAluguel;
