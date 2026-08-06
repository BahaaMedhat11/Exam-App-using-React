import type { RouteObject } from "react-router";
import AuthGurd from "./features/auth/components/layout/AuthLayout";
import { authRoutes } from "./features/auth/routes/auth.route";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      // Authentication Route

      {
        element: <AuthGurd />,
        children: authRoutes,
      },
    ],
  },
  {
    path: "/auth",
    element: <h1 className="text-red-500 text-3xl">auth page</h1>,
  },
];
