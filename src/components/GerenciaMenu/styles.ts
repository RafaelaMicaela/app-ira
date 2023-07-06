import styled from "styled-components";

export const MenuList = styled.ul`
  width: 224px;
  height: 56px;
  border-radius: 8px 8px 0px 0px;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;
`;

export const MenuItem = styled.li`
  border-radius: 8px 8px 0px 0px;
  background: #f8f8fc;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--back-lines-in-white, #e6e6f0);
  margin: 0 0 2px 16px;
  padding: 0 16px;
`;

export const MenuLink = styled.a`
  display: block;
  height: 100%;
  text-decoration: none;
  color: #380f88;
  padding: 16px;
  cursor: pointer;

  :hover {
    background: #d8d8e3;
    color: #380f88;
  }
`;
