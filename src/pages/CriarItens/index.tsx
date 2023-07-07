import {
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

import { useState } from "react";
import axios from "axios";

const CriarItens = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post("http://3.128.249.166:8000/api/itens/", { name, description });
      alert("Item criado com sucesso!");
      setName("");
      setDescription("");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar item!");
    }
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
  };

  return (
    <>
      <Container>
        <Title>Criar Item</Title>
        <CardForm onSubmit={handleSubmit}>
          <ContainerLabel>
            <Label>
              {/*Nome: <Input type="text"  value = {name} onChange={(event) => setName(event.target.value)} name="name" />*/}
              Nome:{" "}
              <Input
                type="text"
                value={name}
                onChange={handleNameChange}
                name="name"
              />
            </Label>
            <Label>
              Descrição:{" "}
              <Input
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                name="description"
              />
            </Label>
          </ContainerLabel>

          <ContainerButton>
            <Button1 type="button" onClick={handleCancel}>
              Cancelar
            </Button1>
            <Button2 type="submit" onClick={handleSubmit}>Salvar</Button2>
          </ContainerButton>
        </CardForm>
      </Container>
    </>
  );
};

export default CriarItens;
