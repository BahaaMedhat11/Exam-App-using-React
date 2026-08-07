import * as React from "react";
import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn } from "../../shared/lib/tailwind-merge";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        // Layout & Sizing
        "h-11.5 w-full min-w-0 px-2.5 py-1",

        // Typography & Text
        "placeholder:text-muted-foreground text-base text-gray-800 md:text-sm",

        // Base Aesthetics & Transitions
        "border border-gray-200 bg-white transition-colors outline-none hover:border-blue-600",

        // File Input Styles
        "file:text-foreground file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400",

        // Focus States
        "focus-visible:border-blue-600 focus-visible:ring-3 focus-visible:ring-blue-100",

        // Disabled States
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-400",

        // Invalid / Validation States
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:ring-3",

        // Dark Mode Overrides
        "dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",

        className,
      )}
      {...props}
    />
  );
}

export { Input };
