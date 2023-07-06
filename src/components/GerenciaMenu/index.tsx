import { MenuItem, MenuLink, MenuList, Button } from "./styles";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GerenciaMenu = () => {
  return (
    <>
      <Button>+</Button>
      <MenuList>
        <MenuItem>
          <MenuLink>Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <Link to="/ListItens">
            <MenuLink>Itens</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/ListTemas">
            <MenuLink>Temas</MenuLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <MenuLink>Alugeis</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink>Clientes</MenuLink>
        </MenuItem>
      </MenuList>
    </>
  );
};

export default GerenciaMenu;
