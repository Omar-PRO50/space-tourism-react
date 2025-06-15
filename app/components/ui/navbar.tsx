import { Link, NavLink } from "react-router";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
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
    <div className="absolute inset-x-0 z-20 flex items-center justify-between gap-300 p-300 tablet:gap-0 tablet:p-0">
      <Link to="/" className="tablet:px-500 tablet:py-300 desktop:px-800">
        <span className="relative block after:absolute after:top-1/2 after:left-[calc(100%+var(--spacing-800))] after:z-10 after:hidden after:h-[1px] after:w-[calc(50vw-100%-2*var(--spacing-800)+var(--spacing-200))] after:bg-white after:opacity-25 desktop:after:block">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="size-500 tablet:size-600"
          />
        </span>
      </Link>

      {/*Mobile Navbar*/}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger aria-label="open navigation menu">
          <img
            src={hamburger}
            alt="Hamburger icon"
            className="cursor-pointer tablet:hidden"
          />
        </SheetTrigger>
        <SheetContent className="w-3xs gap-300 bg-blue-900/70 pl-400 backdrop-blur-[80px] tablet:hidden">
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Navigation Links</VisuallyHidden>
            </SheetTitle>
          </SheetHeader>
          <nav className="text-preset-8-desktop text-white uppercase">
            <ul className="flex flex-col gap-400">
              {NAVLINKS.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      [
                        isActive
                          ? "active after:bg-white"
                          : "hover:after:bg-white/50",
                        "relative block w-full after:absolute after:inset-y-0 after:right-0 after:w-[3px] after:transition-all after:duration-600",
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

      {/*Tablet and Desktop Navbar*/}
      <nav className="hidden h-navbar-height-tablet grow-1 justify-end bg-white/5 pr-500 text-preset-8-desktop text-white uppercase backdrop-blur-[80px] tablet:flex desktop:w-[calc(50%+var(--spacing-200))] desktop:grow-0 desktop:px-800">
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
