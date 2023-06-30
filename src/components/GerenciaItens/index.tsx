import ListItens from "../ListItens";
import { H1, MenuItem, MenuLink, MenuList, NavBar } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

const GerenciaIntes = () => {
  return (
    <>
      <NavBar>
        <H1>Intes</H1>
      </NavBar>

      <MenuList>
        <MenuItem>
          <MenuLink>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Temas</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Alugeis</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Clentes</MenuLink>
        </MenuItem>
      </MenuList>

      <ListItens/>
    </>
  );
};

export default GerenciaIntes;
