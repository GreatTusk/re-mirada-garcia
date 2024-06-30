"use client";

import Link from "next/link";
import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import { navbar_theme } from "@/app/lib/themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { links } from "@/app/lib/data";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import React from "react";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineLoading } from "react-icons/ai";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="pb-8">
      <Navbar fluid theme={navbar_theme}>
        <Navbar.Brand as={Link} href="/">
          <Image
            src="/logo.png"
            className="mr-3 sm:h-9 h-full object-cover rounded-full"
            alt="Logo Mirada Garcia"
            width={36}
            height={36}
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Mirada García
          </span>
        </Navbar.Brand>
        <div className="flex lg2:order-2 gap-4">
          <SignedIn>
            {/* Mount the UserButton component */}
            <ClerkLoaded>
              <UserButton />
            </ClerkLoaded>
            <ClerkLoading>
              <AiOutlineLoading className="animate-spin text-muted-foreground" />
            </ClerkLoading>
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <ClerkLoaded>
              <SignInButton fallbackRedirectUrl="/">
                <Button outline gradientDuoTone="purpleToBlue">
                  <HiUserCircle className="h-5 w-5" />
                </Button>
              </SignInButton>
            </ClerkLoaded>
            <ClerkLoading>
              <AiOutlineLoading className="animate-spin text-muted-foreground text-center" />
            </ClerkLoading>
          </SignedOut>
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
    </div>
  );
}
