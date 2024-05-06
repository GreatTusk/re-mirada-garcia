"use client";

import Link from "next/link";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import { navbar_theme } from "@/app/lib/themes";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const links = [
    { path: "/", label: "Inicio" },
    { path: "/portafolio", label: "Portafolio" },
    { path: "/tienda", label: "Tienda" },
    { path: "/nuestra_vision", label: "Nuestra visión" },
    { path: "/quienes_somos", label: "Quiénes somos" },
  ];

  const pathname = usePathname();

  return (
    <Navbar fluid theme={navbar_theme}>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/icon.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mirada García
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {links.map((link) => (
          <Navbar.Link
            key={link.path}
            as={Link}
            href={link.path}
            active={pathname === link.path}
          >
            {link.label}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
