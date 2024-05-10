"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useAnimationOnView } from "@/app/lib/util";

export default function LlamadaAccion() {
  const ref = useAnimationOnView("animate-fadeIn");
  return (
    <div ref={ref} className="pb-16 pt-8 px-4 mx-auto max-w-screen-xl lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
          Sé parte de la experiencia MiradaGarcía
        </h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Descubre la magia capturada en cada imagen. Explora nuestro portafolio
          fotográfico y déjate cautivar por momentos inolvidables.
        </p>

        <Link href="/portafolio">
          <Button outline gradientDuoTone="purpleToBlue" className="w-full">
            Portafolio
          </Button>
        </Link>
      </div>
    </div>
  );
}
