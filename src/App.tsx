import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';

import Splash from "./pages/Splash";

import ListItens from "./pages/ListItens";
import ListTemas from "./pages/ListTemas";
import CriarItens from "./pages/CriarItens";
import CriarTemas from "./pages/CriarTemas";
import ListClientes from "./pages/ListClientes";
import CriarClientes from "./pages/CriarClientes";


const Home = lazy(() => import('./pages/Home'));

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
        <Route path="/CriarClientes" element={<CriarClientes/>}/>
      </Routes>
    </Suspense>
  );
};

export default App;
