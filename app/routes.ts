import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("destination", "routes/destination.tsx"),
  route("crew", "routes/crew.tsx"),
  route("technology", "routes/technology.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
