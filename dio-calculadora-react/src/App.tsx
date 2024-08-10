import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Calculator } from "./pages/calculator";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Calculator />,
    },
  ]);

  return <RouterProvider router={router} />;
}
