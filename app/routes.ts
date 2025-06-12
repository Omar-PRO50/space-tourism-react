import { type RouteConfig, index, route } from "@react-router/dev/routes";
import path from "path";

export default [
  index("routes/home.tsx"),
  route("destination", "routes/destination.tsx"),
  route("crew", "routes/crew.tsx"),
  route("technology", "routes/technology.tsx"),
] satisfies RouteConfig;
