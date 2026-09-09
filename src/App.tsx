import "./App.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/routes"; // routes created containing the parent route and it's children (routes.tsx)

const router = createRouter({ routeTree }); // Creating a router that will be passed in in the RouterProvider

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
