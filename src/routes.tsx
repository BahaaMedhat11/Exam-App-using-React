import type { RouteObject } from "react-router";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <h2>home page</h2>
      </>
    ),
  },
  {
    path: "/auth",
    element: <h1 className="text-red-500 text-3xl">auth page</h1>,
  },
];
