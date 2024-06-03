import { CarrouselPortafolio } from "@/app/ui/portafolio/carrousel-portafolio";
import { ItemPortafolio, ItemTestimonio } from "@/app/lib/definitions";
import { Testimonio } from "@/app/ui/portafolio/testimonio";
import React from "react";

export default function Heading({
  itemPortafolio,
  testimonio,
}: {
  itemPortafolio: ItemPortafolio;
  testimonio: ItemTestimonio;
}) {
  return (
    <div
      id={itemPortafolio.images_config.image_folder.folder.substring(5)}
      className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-6"
    >
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {itemPortafolio.titulo}
        </h2>
        <p className="mb-4">{itemPortafolio.descripcion}</p>
      </div>
      <div className="mt-8">
        <CarrouselPortafolio imageConfig={itemPortafolio.images_config} />
      </div>
      <div className="mt-8 lg:mt-4 max-w-screen-xl lg:col-span-2">
        <Testimonio testimonio={testimonio} />
      </div>
    </div>
  );
}
