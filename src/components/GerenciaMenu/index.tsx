import { MenuItem, MenuLink, MenuList, Button } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";

const GerenciaMenu = () => {
  return (
    <>
      <Button>+</Button>
      <MenuList>
        <MenuItem>
          <MenuLink href="./../../pages/Home">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="./../ListItens">Itens</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="./../ListTemas">Temas</MenuLink>
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
