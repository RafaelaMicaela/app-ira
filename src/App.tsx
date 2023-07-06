import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import ListItens from "./pages/ListItens";
import ListTemas from "./pages/ListTemas";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listitens" element={<ListItens />} />
      <Route path="/listtemas" element={<ListTemas />} />
    </Routes>
  );
};

export default App;
