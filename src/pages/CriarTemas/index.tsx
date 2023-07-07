import { ContainerButton } from "../CriarItens/styles";
import {
  Button1,
  Button2,
  CardForm,
  Container,
  ContainerItens,
  ContainerLabel,
  Input,
  Label,
  ListItem,
  SelectItens,
  Title,
} from "./styles";

import { useState } from "react";
import axios from "axios";

const CriarTemas = () => {
  const [name, setName] = useState("");
  const [cor, setCor] = useState("");
  const [preco, setPreco] = useState("");
  const [itens, setItens] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleCorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCor(event.target.value);
  };
  const handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPreco(event.target.value);
  };
  const handleItensChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItens(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await axios.post("http://3.128.249.166:8000/api/themes/", {
        name,
        cor,
        preco,
        itens,
      });
      alert("Item criado com sucesso!");
      setName("");
      setCor("");
      setPreco("");
      setItens("");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar item!");
    }
  };

  const handleCancel = () => {
    setName("");
    setCor("");
    setPreco("");
    setItens("");
  };

  return (
    <Container>
      <Title>Criar Temas</Title>
      <CardForm onSubmit={handleSubmit}>
        <ContainerLabel>
          <Label>
            Nome:
            <Input type="text" name="name" value={name} onChange={handleNameChange} />
          </Label>
          <Label>
            Cor:
            <Input type="text" name="color" value={cor} onChange={handleCorChange} />
          </Label>
          <Label>
            Preço:
            <Input type="text" name="price" value={preco} onChange={handlePrecoChange} />
          </Label>
        </ContainerLabel>

        <ContainerItens>
          <ListItem>
            <Label>Itens:</Label>
            <SelectItens>
              <option value="1">Pula-Pula</option>
              <option value="2">Painel</option>
            </SelectItens>
          </ListItem>
        </ContainerItens>

        <ContainerButton>
          <Button1 type="button" onClick={handleCancel}>Cancelar</Button1>
          <Button2 type="submit" onClick={handleSubmit}>Salvar</Button2>
        </ContainerButton>
      </CardForm>
    </Container>
  );
};

export default CriarTemas;
