import Heading from "@/app/ui/portafolio/heading";
import { Metadata } from "next";
import {
  itemConcierto,
  itemMatrimonio,
  itemRetrato,
  testimonioConcierto,
  testimonioMatrimonio,
  testimonioRetrato,
} from "@/app/lib/data";
import BotonLlamado from "@/app/ui/portafolio/boton-llamada-accion";

export default function Page() {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        <Heading
          itemPortafolio={itemConcierto}
          testimonio={testimonioConcierto}
        />
        <Heading
          itemPortafolio={itemMatrimonio}
          testimonio={testimonioMatrimonio}
        />
        <Heading itemPortafolio={itemRetrato} testimonio={testimonioRetrato} />
        <BotonLlamado />
      </div>
      
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
