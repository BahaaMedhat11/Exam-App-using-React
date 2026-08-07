import { cn } from "../../../../shared/lib/tailwind-merge";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

function Heading({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn("text-2xl font-bold text-gray-800", className)}
      {...props}
    />
  );
}

export default Heading;
