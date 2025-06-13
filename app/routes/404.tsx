import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex min-h-lvh flex-col items-center justify-center gap-8 text-white">
      <h1 className="text-preset-2-mobile">404 - Page Not Found</h1>
      <div className="flex items-baseline gap-2">
        <p className="text-preset-9-desktop">
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="text-preset-6-tablet nav-underline h-6 uppercase"
        >
          Go back Home
        </Link>
      </div>
    </div>
  );
}
