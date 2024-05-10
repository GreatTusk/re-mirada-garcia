import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export default function Page() {
  return <SignIn />;
}
export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Registro",
  },
};
