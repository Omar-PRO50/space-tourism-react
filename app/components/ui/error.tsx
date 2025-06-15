import type { ReactNode } from "react";
import { Link } from "react-router";

export function Error({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <main className="flex min-h-lvh flex-col items-center justify-center gap-7 text-center text-white">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-preset-2-mobile">{title}</h1>
        <p className="text-preset-4-desktop">{description}</p>
      </div>
      <div>{children}</div>
      <Link
        to="/"
        className="nav-underline h-8 text-preset-3-mobile text-blue-300 uppercase transition-all duration-600 after:h-[1px] hover:text-white"
      >
        Go back Home
      </Link>
    </main>
  );
}
