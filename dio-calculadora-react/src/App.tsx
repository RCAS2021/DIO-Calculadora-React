import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Calculator } from "./pages/calculator";
import { Toaster } from "sonner";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Calculator />,
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
