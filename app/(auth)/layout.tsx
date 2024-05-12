// noinspection HtmlRequiredTitleElement

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeModeScript } from "flowbite-react";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

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
    <ClerkProvider localization={esES}>
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${inter.className} flex w-full h-screen bg-white dark:bg-gray-900`}
        >
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Bienvenidos a Mirada García
                </h1>
                <p className="text-base text-gray-400">
                  Capturamos momentos únicos para ti
                </p>
              </div>
              <div className="flex items-center justify-center mt-8">
                {children}
              </div>
            </div>
            <div className="bg-[url('/auth_bg.jpeg')] h-full hidden lg:flex items-center justify-center bg-cover bg-center"></div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
