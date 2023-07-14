import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardForm = styled.form`
  width: 700px;
  height: 600px;
  padding: 40px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 62px;
  margin-bottom: 15px;
  border: 1px solid #e6e6f0;
  background-color: #fafafc;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 20px;
`;
export const Button1 = styled.button`
  width: 232px;
  height: 46px;
  background-color: #8257e5;
  border: 0;
  border-radius: 8px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: #e2d6ff;
  }
`;
export const Button2 = styled.button`
  width: 232px;
  height: 46px;
  background-color: #04d361;
  border: 0;
  border-radius: 8px;
  font-size: 15px;
  color: #fff;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #078661;
  }
`;
export const Link = styled.a`
  margin-top: 15px;
  font-size: 15px;
  color: #333;
  text-decoration: none;
  &:hover {
    color: #00b894;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  color: #6a6180;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
  flex-direction: row;
`;

export const ContainerLabel = styled.div`
  width: 100%;
`;

export const BackButton = styled(LinkRouter)`
  width: 232px;
  height: 46px;
  background-color: #8257e5;
  border: 0;
  border-radius: 8px;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  

  &:hover {
    background-color: #e2d6ff;
  }
`;
