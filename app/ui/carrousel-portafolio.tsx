import { Carousel } from "flowbite-react";
import Image from "next/image";

export function CarrouselPortafolio({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {Array.from({ length: 4 }).map((_, index) => (
          <Image
            src={`${imageUrl}/${index + 1}.jpg`}
            alt={`${imageUrl}${index + 1}`}
            key={index}
            width={width}
            height={height}
          />
        ))}
      </Carousel>
    </div>
  );
}
