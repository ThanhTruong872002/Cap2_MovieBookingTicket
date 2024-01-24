import { useRoutes } from "react-router-dom";
import Account from "../pages/Account";

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "/account",
      element: <Account />,
    },
  ]);
  return routeElements;
}
