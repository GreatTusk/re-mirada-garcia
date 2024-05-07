import { PlanFoto } from "@/app/lib/definitions";
import { PlanPrecio } from "@/app/ui/tienda/plan-precio";

export default function Page() {
  const planXprees: PlanFoto = {
    titulo: "Pack Xprees",
    precio: 260000,
    incluye: {
      servicios: [
        "Sesión de documentales de la ceremonia",
        "Edición profesional de las fotografías",
        "Entrega de 100 fotografías digitales en alta resolución",
        "2 horas de cobertura",
      ],
    }, // Correcting object declaration
    noIncluye: {
      servicios: ["Fotografo asistente", "Sesión artística en exteriores"],
    },
  };

  const planPetite: PlanFoto = {
    titulo: "Pack Pettite",
    precio: 480000,
    incluye: {
      servicios: [
        "Sesión de documentales de la ceremonia",
        "Sesión artística en exteriores",
        "Edición profesional de las fotografías",
        "Entrega de 200 fotografías digitales en alta resolución",
        "Fotografo asistente",
        "4 horas de cobertura",
      ],
    }, // Correcting object declaration
    noIncluye: { servicios: ["Sesión preBoda", "Fotografias sin editar"] },
  };

  const planPlus: PlanFoto = {
    titulo: "Pack Plus",
    precio: 1550000,
    incluye: {
      servicios: [
        "Sesión de documentales desde los preparativos de la novia hasta la celebracion",
        "Sesión artística en exteriores",
        "Edición profesional de las fotografías",
        "Entrega de 650 fotografías digitales en alta resolución",
        "2 Fotografo asistente",
        "4 horas de cobertura",
      ],
    }, // Correcting object declaration
    noIncluye: { servicios: ["Sesión preBoda", "Fotografias sin editar"] },
  };

  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-screen-xl px-4 py-8 md:grid md:grid-cols-2 md:py-8 lg:grid-cols-3 lg:gap-8 lg:py-16 xl:gap-0">
          <PlanPrecio planFoto={planXprees} />
          <PlanPrecio planFoto={planPetite} />
          <PlanPrecio planFoto={planPlus} />
        </div>
      </div>
    </main>
  );
}
