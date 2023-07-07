import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;

export const ContainerButton = styled.div`
  display: flex;
`;

export const P = styled.p`
  color: var(--texts-inputs, #c1bccc);
  font-size: 22px;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 26px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--shapes-inputs, #f8f8fc);
  height: 60px;
  width: 645px;
  flex-shrink: 0;
  margin: 0 0 2px 16px;
  padding: 0 16px;
`;

export const CardIten = styled.div`
  align-items: center;
  border-radius: 8px 8px 0px 0px;
  background: var(--shapes-inputs, #f8f8fc);
  height: 60px;
  width: 645px;
  flex-shrink: 0;
  border: 1px solid var(--back-lines-in-white, #e6e6f0);
  margin: 0 0 2px 16px;
  padding: 0 16px;
  display: flex;
`;

export const TitleIten = styled.p`
  color: var(--texts-inputs, #6a6180);
  font-size: 22px;
  text-align: center;
  font-family: Poppins, sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 26px;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Icon = styled.img`
  width: 19px;
  height: 19px;
  color: #c9c9d4;
  position: absolute;
  right: 645px;
`;
