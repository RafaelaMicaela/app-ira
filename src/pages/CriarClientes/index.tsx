import axios from "axios";
import React, { useState } from "react";
import { Button1, Button2, CardForm, Container, ContainerButton, ContainerLabel, Input, Label, Title } from "./styles";

interface Client {
    id: number;
    name: string;
    email: string;
    phone1: string
    phone2: string;
};

const CriarClientes = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');


    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePhone1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone1(event.target.value);
    };
    const handlePhone2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone2(event.target.value);
    };

    const createClient = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const client: Client = {
                name,
                email,
                phone1,
                phone2,
                id: 0
            }
            await axios.post('http://3.128.249.166:8000/api/clients/', client);
            console.log("Cliente criado com sucesso")
        } catch (error) {
            console.log(error)
        }

    };

    const handleCancel = () => {
        setName("");
        setEmail("");
        setPhone1("");
        setPhone2("");
    };


    return (
        <Container>
            <Title>Criar Clientes</Title>
            <CardForm>
                <ContainerLabel>
                    <Label>
                        Nome:
                        <Input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Label>
                    <Label>
                        E-mail:
                        <Input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </Label>
                    <Label>
                        Telefone 1:
                        < Input
                            type="text"
                            value={phone1}
                            onChange={handlePhone1Change}
                        />
                    </Label>
                    <Label>
                        Telefone 2:
                        <Input
                            type="text"
                            value={phone2}
                            onChange={handlePhone2Change}
                        />
                    </Label>
                </ContainerLabel>
                <ContainerButton>
                    <Button1 type="button" onClick={handleCancel}>Cancelar</Button1>
                    <Button2 type="submit" onClick={createClient}>Salvar</Button2>
                </ContainerButton>
            </CardForm>
        </Container>
    )
}

export default CriarClientes;