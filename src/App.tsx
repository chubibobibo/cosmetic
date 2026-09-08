import "./App.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes/routes"; // routes created containing the parent route and it's children (routes.tsx)
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const router = createRouter({ routeTree }); // Creating a router that will be passed in in the RouterProvider

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
