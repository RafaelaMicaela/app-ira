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

interface EditClient {
  id: number;
  name?: string;
  email?: string;

}

const CardClient = () => {
  const [clients, setClients] = useState<Client[]>([]);

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
  
  useEffect(() => {
    fetchClients();
  }, []);

  const editClient = async ({ email, name, id }: EditClient) => {
    try {
      await axios.put(`http://3.128.249.166:8000/api/clients/${id}/`, {
        email, name
      });
      fetchClients();
    } catch (error) {
      console.error('error ao editar: ', error)
    }
  };

  const deleteClient = async (clientId: number) => {
    try{
      await axios.delete(`http://3.128.249.166:8000/api/clients/${clientId}/`);
      fetchClients();
    } catch (error){
      console.error('erro ao deletar cliente', error)
    }
  }

  return (
    <>
      {clients.map((client) => (
        <Card>
          <NameClient>{client.name}</NameClient>
          <ContainerIcons>
            <IconEditar onClick={() => editClient({
              id: client.id,
              email: client.email,
              name: client.name
            })} src={IconEditClient} />
            <IconExcluir onClick={() => deleteClient(client.id)} src={IconDeleteClient} />
          </ContainerIcons>
        </Card>
      ))}
    </>
  );
};

export default CardClient;
