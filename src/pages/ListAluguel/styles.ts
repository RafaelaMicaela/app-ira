import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  width: 300px;
  height: 250px;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

export const ContentTema = styled.div`
  width: 132px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #04d361;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NomeTema = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const IconExcluir = styled.img`
  width: 32px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;
export const IconEditar = styled.img`
  width: 32px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardNome = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #000;
`;

export const CardData = styled.h3`
  font-size: 16px;
  font-family: "popins", sans-serif;
  color: #6a6180;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export const ContentNomeData = styled.div`
  text-align: left;
  width: 100%;
`;

export const ContainerCardHora = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid #e6e6f0;
  width: 100%;
`;

export const CardHora = styled.h3`
  font-size: 16px;
  color: #9c98a6;
  text-align: left;
  font-style: normal;
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px 0 20px;
`;

export const ContentTemaLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
