import { CarrouselPortafolio } from "@/app/ui/carrousel-portafolio";
import { Metadata } from "next";

export default function Page() {
  const imageUrls = [
    "/img/fotos_concierto",
    "/img/fotos_matrimonio",
    "/img/fotos_retratos",
  ];
  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 pb-12 pt-24 lg:px-6">
          <h1
            className="
             text-4xl font-bold text-center text-gray-900 dark:text-gray-100 pb-8"
          >
            Portafolio
          </h1>

          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <CarrouselPortafolio
              imageUrl={imageUrls[0]}
              width={1908}
              height={1272}
            />
          </div>
          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <CarrouselPortafolio
              imageUrl={imageUrls[1]}
              width={1920}
              height={1280}
            />
          </div>
          <div className="mx-auto mb-8 max-w-screen-sm text-center">
            <CarrouselPortafolio
              imageUrl={imageUrls[2]}
              width={1920}
              height={1280}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
