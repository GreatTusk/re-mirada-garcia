import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function BotonLlamado() {
  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <Image
        src="/img/fotos-concierto/5.jpg"
        width={1908}
        height={1272}
        alt="Picture of the author"
        className="w-full dark:hidden rounded-2xl"
        placeholder="blur"
        blurDataURL="/carousel-fallback.svg"
      />
      <Image
        src="/img/fotos-concierto/6.jpg"
        width={1908}
        height={1272}
        alt="Picture of the author"
        className="w-full hidden dark:block rounded-2xl"
        placeholder="blur"
        blurDataURL="/carousel-fallback.svg"
      />
      {/* <video width="500" height="500" preload="none" autoPlay muted>
                <source src="https://vimeo.com/905996748" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
          Contáctanos hoy mismo
        </h2>
        <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Sé parte de esta experiencia. Descubre el poder de la fotografía
          profesional y captura momentos inolvidables con nosotros.
        </p>

        <Link href="/tienda">
          <Button outline gradientDuoTone="purpleToBlue" className="w-full">
            Contratar ya
          </Button>
        </Link>
      </div>
    </div>
  );
}
