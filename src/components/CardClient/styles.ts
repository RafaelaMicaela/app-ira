import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 250px;
  height: 250px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
  margin: 10px;
`;

export const NameClient = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: 700;
  color: #32264d;
  line-height: 25px;
  font-style: normal;
  font-family: "Archivo", sans-serif;
`;

export const ContainerIcons = styled.div`
  display: flex;
  `;

export const IconExcluir = styled.img`
  width: 32px;
  height: 30px;
  flex-shrink: 0;
`;
export const IconEditar = styled.img`
  width: 32px;
  height: 30px;
  flex-shrink: 0;
`;
