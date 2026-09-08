// Here lives the routes

import { createRootRoute, createRoute } from "@tanstack/react-router";
import { HomePageLayout, IndexPage, TestPage } from "../utils";

const rootRoute = createRootRoute({ component: HomePageLayout }); // creates the root route having HomepageLayout as the component

// creating individual routes based on the root route, specifying the component that will be rendered and the path
const IndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: IndexPage,
  path: "/",
});

const TestRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: TestPage,
  path: "test",
});

// create a route tree (specifying the children pages that it contains) that will be used in main.tsx
export const routeTree = rootRoute.addChildren([IndexRoute, TestRoute]);
