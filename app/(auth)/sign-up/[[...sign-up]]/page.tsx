import { Metadata } from "next";
import dynamic from "next/dynamic";

const DynamicSignUp = dynamic(() => import("@/app/ui/auth/sign-up-component"), {
  ssr: false,
});
export default function Page() {
  return <DynamicSignUp />;
}
export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Inicio sesión",
  },
};
