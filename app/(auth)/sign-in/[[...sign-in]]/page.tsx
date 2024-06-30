import { Metadata } from "next";
import dynamic from "next/dynamic";

const DynamicSignIn = dynamic(() => import("@/app/ui/auth/sign-in-component"), {
  ssr: false,
});
export default function Page() {
  return <DynamicSignIn />;
}
export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Registro",
  },
};
