import {
  Card,
  ContainerIcons,
  IconEditar,
  IconExcluir,
  NameClient,
} from "./styles";
import IconDeleteClient from "../../assets/Trash.png";
import IconEditClient from "../../assets/Pencil.png";
import axios from "axios";
import { useEffect, useState } from "react";

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const CardClient = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(
          "http://3.128.249.166:8000/api/clients/"
        );
        setClients(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      {clients.map((client) => (
        <Card>
          <NameClient>{client.name}</NameClient>
          <ContainerIcons>
            <IconEditar src={IconEditClient} />
            <IconExcluir src={IconDeleteClient} />
          </ContainerIcons>
        </Card>
      ))}
    </>
  );
};

export default CardClient;
