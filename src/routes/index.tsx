import ListItens from "../components/ListItens";
import ListTemas from "../components/ListTemas";
import { Home } from "../pages/Home";

export const path = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/listItens",
    element: <ListItens />,
  },
  {
    path: "/listTemas",
    element: <ListTemas />,
  },
];

export function Routes() {
  return (
    <>
      <Home />
      
    </>
  );
}
