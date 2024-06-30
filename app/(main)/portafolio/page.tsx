import Heading from "@/app/ui/portafolio/heading";
import { Metadata } from "next";
import BotonLlamado from "@/app/ui/portafolio/boton-llamada-accion";
import { ItemPortafolio, ItemTestimonio } from "@/app/lib/definitions";

async function fetchItemPortafolio() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/itemportafolio/?format=json`,
  );
  return await res.json();
}

async function fetchItemTestimonio() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/itemtestimonio/?format=json`,
  );
  return await res.json();
}

export default async function Page() {
  const itemPortafolios: ItemPortafolio[] = await fetchItemPortafolio();
  const itemTestimonios: ItemTestimonio[] = await fetchItemTestimonio();

  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        {Array.from({ length: itemPortafolios.length }).map((_, index) => (
          <Heading
            key={itemTestimonios[index].id}
            itemPortafolio={itemPortafolios[index]}
            testimonio={itemTestimonios[index]}
          />
        ))}
        <BotonLlamado />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
