import { PlanPrecio } from "@/app/ui/tienda/plan-precio";
import { Metadata } from "next";
import Marcas from "@/app/ui/tienda/marcas";
import { PlanFoto } from "@/app/lib/definitions";
import { Suspense } from "react";

/*
 * Esta funcion se encarga de hacer una peticion al
 * backend para obtener los planes de fotos
 */
async function fetchPlanesFoto() {
  const res = await fetch(`${process.env.BACKEND_URL}/api/planfoto/`);
  const data = await res.json();

  return data.map((row: any) => ({
    id: row.id,
    titulo: row.titulo,
    precio: row.precio,
    incluye: { servicios: string_to_array(row.incluye.servicios) },
    noIncluye: { servicios: string_to_array(row.no_incluye.servicios) },
  }));
}

function string_to_array(string_array: string) {
  string_array = string_array.replace(/'/g, '"');
  // Parse the JSON string into a JavaScript array
  return JSON.parse(string_array);
}

export default async function Page() {
  const planesFoto: PlanFoto[] = await fetchPlanesFoto();

  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 pt-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Nuestros precios
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            En MiradaGarcía, creemos que la excelencia no debería ser un lujo
            inalcanzable. Nuestros precios están diseñados para ser altamente
            competitivos sin comprometer la calidad.{" "}
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {planesFoto.map((plan: PlanFoto) => (
            <div key={plan.titulo}>
              <Suspense fallback={<div>Loading...</div>} key={plan.titulo}>
                <PlanPrecio planFoto={plan} />
              </Suspense>
            </div>
          ))}
        </div>
        <Marcas />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Tienda",
};
