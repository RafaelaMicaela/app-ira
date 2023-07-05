import ListItens from "./components/ListItens";
import ListTemas from "./components/ListTemas";

import { Home } from "./pages";
import { Routes } from "./routes";

export const path = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listTemas",
    element: <ListTemas />,
  },
  {
    path: "/listItens",
    element: <ListItens />,
  },
  
];

function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
