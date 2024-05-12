import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Metadata } from "next";
import { AiOutlineLoading } from "react-icons/ai";

export default function Page() {
  return (
    <>
      <ClerkLoaded>
        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#005277", // Adjusted primary color to a different shade of blue
              colorBackground: "#1b2c3a",
              colorText: "#F9FAFB", // Adjusted text color to a lighter shade for readability
              colorTextOnPrimaryBackground: "#D1D5DB", // Kept the same
              colorInputText: "#F9FAFB", // Adjusted input text color to a lighter shade for readability
              colorInputBackground: "#374151", // Adjusted input background color to a darker shade
            },
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
export const metadata: Metadata = {
  title: {
    template: "%s | Mirada García",
    default: "Inicio sesión",
  },
};
