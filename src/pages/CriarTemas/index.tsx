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

import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

interface Theme {
  name: string;
  color: string;
  price: string;
}

interface Item {
  id: number;
  name: string;
}

const CriarTemas = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | undefined> (undefined);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };
  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleSelectItensChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedItemId(parseInt(event.target.value));
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/itens/"
        );
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchItems();
  }, []);

  const handleCreateTheme = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const theme: Theme = {
        name,
        color,
        price: parseFloat(price),
      };
      await axios.post("http://3.128.249.166:8000/api/themes", theme);
      console.log("Tema criado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setName("");
    setColor("");
    setPrice("");
    setItems([]);
  };

  return (
    <Container>
      <Title>Criar Temas</Title>
      <CardForm>
        <ContainerLabel>
          <Label>
            Nome:
            <Input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </Label>
          <Label>
            Cor:
            <Input
              id="color"
              type="text"
              name="color"
              value={color}
              onChange={handleColorChange}
            />
          </Label>
          <Label>
            Preço:
            <Input
              id="price"
              type="text"
              name="price"
              value={price}
              onChange={handlePriceChange}
            />
          </Label>
        </ContainerLabel>

        <ContainerItens>
          <ListItem>
            <Label>Itens:</Label>
            <SelectItens
              id="items"
              name="items"
              value={selectedItemId}
              onChange={handleSelectItensChange}
            >
              <option value="">Selecione o item</option>
              {items.map((item: Item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </SelectItens>
          </ListItem>
        </ContainerItens>

        <ContainerButton>
          <Button1 type="button" onClick={handleCancel}>
            Cancelar
          </Button1>
          <Button2 type="submit" onClick={handleCreateTheme}>
            Salvar
          </Button2>
        </ContainerButton>
      </CardForm>
    </Container>
  );
};

export default CriarTemas;
