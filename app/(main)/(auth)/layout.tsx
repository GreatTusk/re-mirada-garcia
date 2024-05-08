import { Metadata } from "next";
import "/app/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center justify-center w-full">{children}</div>
  );
}
export const metadata: Metadata = {
  title: {
    template: "%s | MiradaGarcía",
    default: "Autenticación",
  },
};
