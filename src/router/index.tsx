import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { lazy } from "react";

// Lazy load pages for code splitting
const Home = lazy(() => import("../pages/Home/Home"));
const PersonalProjects = lazy(
  () => import("../pages/PersonalProjects/PersonalProjects"),
);
const Blogs = lazy(() => import("../pages/Blogs/Blogs"));

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const routeTree = rootRoute.addChildren([
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: Home,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/personal-projects",
    component: PersonalProjects,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: "/blogs",
    component: Blogs,
  }),
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
