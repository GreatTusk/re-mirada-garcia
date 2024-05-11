// noinspection HtmlRequiredTitleElement

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeModeScript } from "flowbite-react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

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
        <body className={`${inter.className} flex w-full h-screen`}>
          <div className="flex items-center justify-center pt-24 pb-16 w-1/2 bg-white dark:bg-gray-900">
            {children}
          </div>
          <div
            className={`${inter.className} bg-no-repeat bg-[url('/img/fotos-concierto/7.jpg')] bg-fixed bg-cover w-1/2`}
          ></div>
        </body>
      </html>
    </ClerkProvider>
  );
}
