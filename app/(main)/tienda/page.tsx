import { PlanPrecio } from "@/app/ui/tienda/plan-precio";
import { Metadata } from "next";
import { planPetite } from "@/app/lib/data";

export default function Page() {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:grid md:grid-cols-2 md:py-8 lg:grid-cols-3 lg:gap-8 lg:py-16 xl:gap-0">
          <PlanPrecio planFoto={planPetite} />
          <PlanPrecio planFoto={planPetite} />
          <PlanPrecio planFoto={planPetite} />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Tienda",
};
