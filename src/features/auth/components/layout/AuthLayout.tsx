import { Outlet } from "react-router";
import { cn } from "../../../../shared/lib/tailwind-merge";

function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      {/* features */}
      <section
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-blue-100",
          // before
          "before:absolute before:top-14 before:-right-10 before:size-90 before:rounded-full before:bg-blue-200 before:blur-3xl",
          // after
          "after:absolute after:-bottom-40 after:-left-10 after:size-90 after:rounded-full after:bg-blue-200 after:blur-3xl",
        )}
      >
        features
      </section>
      <main className="flex items-center justify-center bg-white">
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
