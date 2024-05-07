import { PlanPrecio } from "@/app/ui/tienda/plan-precio";
import { Metadata } from "next";
import { planPetite, planXpress, planPlus } from "@/app/lib/data";
import Marcas from "@/app/ui/tienda/marcas";

export default function Page() {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 pt-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Nuestros precios</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">En MiradaGarcía, creemos que la excelencia no debería ser un lujo inalcanzable. Nuestros precios están diseñados para ser altamente competitivos sin comprometer la calidad. </p>
        </div>
        <div className="mx-auto max-w-screen-xl px-4 pb-16 md:grid md:grid-cols-2 md:pb-8 lg:grid-cols-3 lg:gap-8 lg:pb-16 xl:gap-0">

          <PlanPrecio planFoto={planXpress} />
          <PlanPrecio planFoto={planPetite} />
          <PlanPrecio planFoto={planPlus} />
          
        </div>
        <Marcas />
        
      </div>

    </main>
  );
}

export const metadata: Metadata = {
  title: "Tienda",
};
