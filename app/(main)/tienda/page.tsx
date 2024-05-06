import { PlanFoto } from "@/app/lib/definitions";
import { PlanPrecio } from "@/app/ui/tienda/plan-precio";

export default function Page() {

  const planPetite: PlanFoto = {
    titulo: "Pack Petite",
    precio: 480000,
    incluye: {
      servicios: [
        "Sesión de documentales de la ceremonia",
        "Sesión artística en exteriores",
        "Edición profesional de las fotografías",
        "Entrega de 100 fotografías digitales en alta resolución",
      ]
    }, // Correcting object declaration
    noIncluye: { servicios: ["Fotografo asistente"] }
  }

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
