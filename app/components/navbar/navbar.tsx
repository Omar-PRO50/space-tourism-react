import { Link, NavLink } from "react-router";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";

const NAVLINKS = [
  { href: "/", label: "Home" },
  { href: "/destination", label: "Destination" },
  { href: "/crew", label: "Crew" },
  { href: "/technology", label: "Technology" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 z-20 flex w-full items-center justify-between desktop:pt-500">
      <Link to="/" className="p-300 tablet:px-500 desktop:px-800">
        <span className="relative block after:absolute after:top-1/2 after:left-[calc(100%+var(--spacing-800))] after:z-10 after:hidden after:h-[1px] after:w-[calc(50vw-100%-2*var(--spacing-800)+var(--spacing-200))] after:bg-white after:opacity-25 desktop:after:block">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="size-500 tablet:size-600"
          />
        </span>
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <img
            src={hamburger}
            alt="Hamburger icon"
            className="cursor-pointer p-300 tablet:hidden"
          />
        </SheetTrigger>
        <SheetContent className="w-3xs gap-300 bg-blue-900/70 pl-400 backdrop-blur-[80px] tablet:hidden">
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Navigation Links</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>
          <nav className="h-full text-preset-8-desktop text-white uppercase">
            <ul className="flex h-full flex-col gap-400">
              {NAVLINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "active after:bg-white"
                          : "hover:after:bg-white/50",
                        "relative block w-full after:absolute after:right-0 after:bottom-0 after:h-full after:w-[3px] after:transition-all after:duration-600",
                      ].join(" ")
                    }
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <span className="text-preset-8-bold-desktop">
                      0{NAVLINKS.indexOf(link)}
                    </span>
                    &nbsp;
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </SheetContent>
      </Sheet>

      <nav className="hidden h-1200 justify-end bg-white/5 px-500 text-preset-8-desktop text-white uppercase backdrop-blur-[80px] tablet:flex tablet:grow-1 desktop:w-[calc(50%+var(--spacing-200))] desktop:grow-0 desktop:px-800">
        <ul className="flex gap-600">
          {NAVLINKS.map((link) => (
            <li key={link.href} className="h-full">
              <NavLink
                to={link.href}
                className={({ isActive }) => {
                  return [
                    isActive ? "active" : "",
                    "group transtional nav-underline flex h-full items-center",
                  ].join(" ");
                }}
              >
                <span
                  className={`text-preset-8-bold-desktop ${link.label === "Home" ? "group-[.active]:hidden" : ""}`}
                >
                  0{NAVLINKS.indexOf(link)}&nbsp;
                </span>

                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
