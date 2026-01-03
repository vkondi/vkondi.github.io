import { createRootRoute, Outlet } from "@tanstack/react-router";

// Minimal root route required by the router-generator plugin
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

export default rootRoute;
