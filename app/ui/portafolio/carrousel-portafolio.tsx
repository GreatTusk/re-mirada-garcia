import { Carousel } from "flowbite-react";
import Image from "next/image";
import { ImageConfigPortafolio } from "@/app/lib/definitions";

export function CarrouselPortafolio({
  imageConfig,
}: {
  imageConfig: ImageConfigPortafolio;
}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            src={`${imageConfig.image_folder.folder}/${index + 1}.jpg`}
            alt={`${imageConfig.image_folder.folder}${index + 1}`}
            key={index}
            width={imageConfig.width}
            height={imageConfig.height}
            placeholder="blur"
            blurDataURL="/carousel-fallback.svg"
            className="h-full object-cover rounded-2xl"
          />
        ))}
      </Carousel>
    </div>
  );
}
