// Here lives the routes

import { createRootRoute, createRoute } from "@tanstack/react-router";
import {
  HomePageLayout,
  IndexPage,
  ShoppingPage,
  HairProductsPage,
  BodyProductsPage,
  WellnessProductsPage,
} from "../utils";

const rootRoute = createRootRoute({ component: HomePageLayout }); // creates the root route having HomepageLayout as the component

// creating individual routes based on the root route, specifying the component that will be rendered and the path
const IndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: IndexPage,
  path: "/",
});

const ShoppingPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: ShoppingPage,
  path: "shop",
});

const HairProductPageRoute = createRoute({
  getParentRoute: () => ShoppingPageRoute,
  component: HairProductsPage,
  path: "/hairProducts",
});

const BodyProductPageRoute = createRoute({
  getParentRoute: () => ShoppingPageRoute,
  component: BodyProductsPage,
  path: "/bodyProducts",
});

const WellnessProductPageRoute = createRoute({
  getParentRoute: () => ShoppingPageRoute,
  component: WellnessProductsPage,
  path: "/wellnessProducts",
});

// const ErrorPage = createRoute({
//   getParentRoute = rootRoute,
//   component: ErrorPage,
// })

// create a route tree (specifying the children pages that it contains) that will be used in main.tsx
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ShoppingPageRoute,
  HairProductPageRoute,
  BodyProductPageRoute,
  WellnessProductPageRoute,
]);
