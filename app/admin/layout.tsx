import "../globals.css";
import { Metadata } from "next";
import { inter } from "@/app/ui/admin/fonts";
import { checkRole } from "@/app/lib/roles";
import { redirect } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "MiradaGarcía Dashboard",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!checkRole("admin")) {
    redirect("/");
  }
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
