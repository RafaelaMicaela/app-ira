import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Splash from "./pages/Splash";

import ListItens from "./pages/ListItens";
import ListTemas from "./pages/ListTemas";
import CriarItens from "./pages/CriarItens";
import CriarTemas from "./pages/CriarTemas";
import ListClientes from "./pages/ListClientes";
import CriarClientes from "./pages/CriarClientes";
import EditClient from "./pages/EditClient";
import ListAluguel from "./pages/ListAluguel";
import CriarAluguel from "./pages/CriarAluguel";

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listitens" element={<ListItens />} />
        <Route path="/listtemas" element={<ListTemas />} />
        <Route path="/criaritens" element={<CriarItens />} />
        <Route path="/criartemas" element={<CriarTemas />} />
        <Route path="/ListClientes" element={<ListClientes />} />
        <Route path="/CriarClientes" element={<CriarClientes />} />
        <Route path="/EditClient/:id_client" element={<EditClient />} />
        <Route path="/ListAluguel" element={<ListAluguel />} />
        <Route path="/CriarAluguel" element={<CriarAluguel />} />
        <Route path="/EditAluguel/:id_aluguel" element={<CriarAluguel />} />
      </Routes>
    </Suspense>
  );
};

export default App;
