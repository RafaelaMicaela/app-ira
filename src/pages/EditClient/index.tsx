import { useParams } from "react-router-dom";
import {
  BackButton,
  Button1,
  Button2,
  CardForm,
  Container,
  ContainerButton,
  ContainerLabel,
  Input,
  Label,
  Title,
} from "./styles";

import { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  id: number;
  name: string;
  email: string;
}

const EditClient = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { id_client } = useParams();

  const fetchClients = async () => {
    try {
      const response = await axios.get(
        `http://3.128.249.166:8000/api/clients/${id_client}/`
      );
      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  console.log(name, email);

  const ediClient = async (event: any) => {
    event.preventDefault();
    try {
      await axios.put(`http://3.128.249.166:8000/api/clients/${id_client}/`, {
        name: event.target[0].value,
        email: event.target[1].value,
      });
      alert("Cliente editado com sucesso");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    console.log(event);
  };

  return (
    <Container>
      <Title>Edit Client</Title>

      <CardForm onSubmit={ediClient}>
        <ContainerLabel>
          <Label>
            Name:
            <Input
              type="text"
              required={true}
              maxLength={60}
              minLength={1}
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </Label>
          <Label>
            Email:
            <Input
              type="email"
              maxLength={60}
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />
          </Label>
        </ContainerLabel>
        <ContainerButton>
          <BackButton to="/ListClientes">Voltar</BackButton>
          <Button1 type="submit">Save</Button1>
        </ContainerButton>
      </CardForm>
    </Container>
  );
};

export default EditClient;
