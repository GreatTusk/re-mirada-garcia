import { CarrouselPortafolio } from "@/app/ui/portafolio/carrousel-portafolio";
import { ItemPortafolio } from "@/app/lib/definitions";
import React from "react";


export default function Heading({ itemPortafolio }: { itemPortafolio: ItemPortafolio }) {

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 md:flex md:flex-col md:items-center lg:grid lg:grid-cols-2 lg:gap-8 lg:py-16 xl:gap-0">
        <CarrouselPortafolio imageConfig={itemPortafolio.imagesConfig}  />
        <div className="mr-auto place-self-center lg:mx-16">
          <h1 className="mb-4 mt-6 max-w-2xl text-center text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-left md:text-5xl xl:text-6xl">
            {itemPortafolio.titulo}
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            {itemPortafolio.descripcion}
          </p>
          <div className="mb-6 flex max-w-2xl justify-center font-light text-gray-500 dark:text-gray-400 md:justify-start md:text-lg lg:mb-8 lg:text-xl">
            {/* <PurchaseButton /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
