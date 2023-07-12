import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ListItens from "./pages/ListItens";
import ListTemas from "./pages/ListTemas";
import CriarItens from "./pages/CriarItens";
import CriarTemas from "./pages/CriarTemas";
import ListClientes from "./pages/ListClientes";
import CriarClientes from "./pages/CriarClientes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listitens" element={<ListItens />} />
      <Route path="/listtemas" element={<ListTemas />} />
      <Route path="/criaritens" element={<CriarItens />} />
      <Route path="/criartemas" element={<CriarTemas />} />
      <Route path="/ListClientes" element={<ListClientes />} />
      <Route path="/CriarClientes" element={<CriarClientes/>}/>
    </Routes>
  );
};

export default App;
