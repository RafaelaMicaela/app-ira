import { MenuItem, MenuLink, MenuList } from "./styles";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const GerenciaMenu = () => {
  return (
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
        <Link to="/ListClientes">
          <MenuLink>Clientes</MenuLink>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default GerenciaMenu;
