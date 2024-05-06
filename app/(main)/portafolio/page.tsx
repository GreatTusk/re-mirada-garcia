import { ItemPortafolio } from "@/app/lib/definitions";
import { CarrouselPortafolio } from "@/app/ui/portafolio/carrousel-portafolio";
import Heading from "@/app/ui/portafolio/heading";
import { Metadata } from "next";

export default function Page() {
  const imageUrls = [
    "/img/fotos_concierto",
    "/img/fotos_matrimonio",
    "/img/fotos_retratos",
  ];

  const itemConcierto: ItemPortafolio = {
    imagesConfig: {
      imageFolder: imageUrls[0],
      width: 1908,
      height: 1272
    },
    titulo: "Vibraciones Inmortalizadas",
    descripcion: "¡Lleva tu música al siguiente nivel con imágenes que transmitan la energía de tus conciertos en vivo! Como fotógrafo especializado en eventos musicales, capturo la magia de cada actuación en el escenario. Desde la intensidad de tus notas hasta la euforia de tu audiencia, cada imagen está impregnada de la pasión de tu música. Con años de experiencia en la fotografía de conciertos, comprendo la importancia de capturar esos momentos efímeros que definen tu carrera. Trabajaré contigo para garantizar que cada fotografía capture la esencia única de tu actuación en vivo. Contáctame para llevar tu presencia en el escenario al siguiente nivel."
  }

  const itemMatrimonio: ItemPortafolio = {
    imagesConfig: {
      imageFolder: imageUrls[1],
      width: 1920,
      height: 1280
    },
    titulo: "El día más especial de tu vida",
    descripcion: "Bienvenido a la galería del matrimonio de Juan y María. Cada imagen es una historia, un momento congelado en el tiempo, lleno de amor y emoción. Como fotógrafo profesional, me especializo en capturar los momentos más preciados de tu vida y transformarlos en recuerdos duraderos. Desde el intercambio de votos hasta el baile en la recepción, cada detalle es inmortalizado con pasión y creatividad. Permíteme ser parte de tu día especial y contar tu historia a través de mi lente."
  }

  const itemRetrato: ItemPortafolio = {
    imagesConfig: {
      imageFolder: imageUrls[2],
      width: 1920,
      height: 1280
    },
    titulo: "Captura tu esencia",
    descripcion: "¿Deseas un retrato que refleje tu verdadera esencia con la maestría de un profesional? ¡Estás en el lugar adecuado! Como fotógrafo profesional, mi objetivo es capturar la esencia única de cada individuo a través de imágenes que trascienden el tiempo. Con años de experiencia y un enfoque dedicado a la excelencia, te garantizo una sesión de fotografía personalizada que resalte lo mejor de ti. Desde retratos individuales hasta sesiones en pareja o familiares, cada fotografía será una obra de arte que atesorarás para siempre. ¡Contáctame hoy mismo y déjame inmortalizar tu belleza con mi lente experto!"
  }

  return (
    <main>
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
          <Heading itemPortafolio={itemConcierto} />
          <Heading itemPortafolio={itemMatrimonio} />
          <Heading itemPortafolio={itemRetrato} />
        </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
