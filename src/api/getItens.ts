import axios from 'axios';

export interface Item {
    id: number;
    name: string;
    description: string;
    
}

export interface Itens {
    Iten: Item[];
}

export const getItens = async (): Promise<Itens> => {
    const response = await axios.get('http://3.128.249.166:8000/api/itens');
    return response.data;
    }
