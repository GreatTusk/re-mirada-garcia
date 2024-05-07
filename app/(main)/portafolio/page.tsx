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
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
