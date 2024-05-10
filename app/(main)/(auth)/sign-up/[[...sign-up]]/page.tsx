import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export default function Page() {
  return <SignUp />;
}
export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Inicio sesión",
  },
};
