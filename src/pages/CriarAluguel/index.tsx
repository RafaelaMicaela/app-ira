import {
  BackButton,
  Button2,
  Card,
  Container,
  ContainerButton,
  ContainerLabel,
  ContentSelect,
  Input,
  Label,
  List,
  Select,
  Title,
} from "./styles";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Aluguel {
  id: number;
  street: string;
  number: number;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface Client {
  id: number;
  name: string;
}

interface Tema {
  id: number;
  name: string;
}

const CriarAluguel = () => {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [clients, setClients] = useState<Client[]>([]);
  const [temas, setThemes] = useState<Tema[]>([]);
  const [selectedClientId, setSelectedClientId] = useState<number | undefined>(
    undefined
  );
  const [selectedTemaId, setSelectedTemaId] = useState<number | undefined>(
    undefined
  );

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  };
  const handleComplementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComplement(event.target.value);
  };
  const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(event.target.value);
  };
  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };
  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  const handleSelectClientChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedClientId(parseInt(event.target.value));
  };
  const handleSelectTemaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedTemaId(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/clients/"
        );
        setClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchClients();
  }, []);
  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/themes/"
        );
        setThemes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchThemes();
  }, []);

  const createAluguel = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const aluguel: Aluguel = {
        street,
        number,
        complement,
        district,
        city,
        state,
        id: 0,
      };
      await axios.post("http://3.128.249.166:8000/api/Address/", aluguel);
      console.log("Aluguel criado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Title>Criar Aluguel</Title>
        <Card>
          <ContainerLabel>
            <Label>
              Data:
              <Input id="date" type="date"/>
            </Label>
            <Label>
              Início:
              <Input type="time" id="appt" min="09:00" max="18:00" required/>
            </Label>
            <Label>
              Fim:
              <Input type="time" id="appt" min="09:00" max="18:00" required/>
            </Label>
            <ContentSelect>
              <List>
                <Label>Tema:</Label>
                <Select
                  value={selectedTemaId}
                  onChange={handleSelectTemaChange}
                  id="tema"
                >
                  <option value="">Selecione o tema</option>
                  {temas.map((tema: Tema) => (
                    <option key={tema.id} value={tema.id}>
                      {tema.name}
                    </option>
                  ))}
                </Select>
              </List>
            </ContentSelect>
            <ContentSelect>
              <List>
                <Label>Cliente:</Label>
                <Select
                  value={selectedClientId}
                  onChange={handleSelectClientChange}
                  id="cliente"
                >
                  <option value="">Selecione o cliente</option>
                  {clients.map((client: Client) => (
                    <option key={client.id} value={client.id}>
                      {client.name}
                    </option>
                  ))}
                </Select>
              </List>
            </ContentSelect>
            <Label>
              Enderenço:
              <Input type="text" value={street} onChange={handleStreetChange} />
            </Label>
            <Label>
              Número:
              <Input type="text" value={number} onChange={handleNumberChange} />
            </Label>
            <Label>
              Complemento:
              <Input
                type="text"
                value={complement}
                onChange={handleComplementChange}
              />
            </Label>
            <Label>
              Bairro:
              <Input
                type="text"
                value={district}
                onChange={handleDistrictChange}
              />
            </Label>
            <Label>
              Cidade:
              <Input type="text" value={city} onChange={handleCityChange} />
            </Label>
            <Label>
              Estado:
              <Input type="text" value={state} onChange={handleStateChange} />
            </Label>
          </ContainerLabel>
          <ContainerButton>
            <BackButton to="/ListAluguel">Voltar</BackButton>
            <Button2 type="submit" onClick={createAluguel}>
              Salvar
            </Button2>
          </ContainerButton>
        </Card>
      </Container>
    </>
  );
};

export default CriarAluguel;
