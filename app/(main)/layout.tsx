// noinspection HtmlRequiredTitleElement

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeModeScript } from "flowbite-react";
import NavBar from "@/app/ui/navbar";
import { FooterGarcia } from "@/app/ui/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";
import { shadows } from "@clerk/themes/dist/clerk-js/src/ui/foundations/shadows";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Mirada García",
  },
  description: "Capturamos momentos únicos para ti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body className={`${inter.className} bg-white dark:bg-gray-900`}>
          <NavBar />
          {children}
          <FooterGarcia />
        </body>
      </html>
    </ClerkProvider>
  );
}
