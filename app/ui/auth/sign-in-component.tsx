"use client";
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { AiOutlineLoading } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function SignInComponent() {
  const [themeMode, setThemeMode] = useState("light"); // default to light mode
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedThemeMode = localStorage.getItem("flowbite-theme-mode");
      if (storedThemeMode) {
        setThemeMode(storedThemeMode);
      }
    }
  }, []);

  return (
    <>
      <ClerkLoaded>
        <SignIn
          appearance={{
            variables:
              themeMode === "dark"
                ? {
                    colorPrimary: "#005277",
                    colorBackground: "#1b2c3a",
                    colorText: "#F9FAFB",
                    colorTextOnPrimaryBackground: "#D1D5DB",
                    colorInputText: "#F9FAFB",
                    colorInputBackground: "#374151",
                  }
                : {},
            elements: {
              input: {
                backgroundColor: "#374151", // Adjusted input background color to match the colorInputBackground variable
                borderRadius: "full", // Kept the same
              },
              logoImage: "rounded-full", // Kept the same
            },
            layout: {
              socialButtonsVariant: "iconButton", // Kept the same
              logoPlacement: "inside", // Kept the same
              logoImageUrl: "/logo.png", // Kept the same
              logoLinkUrl: "/", // Kept the same
            },
          }}
        />
      </ClerkLoaded>
      <ClerkLoading>
        <AiOutlineLoading className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </>
  );
}
