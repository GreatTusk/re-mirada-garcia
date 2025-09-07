import Heading from "@/app/ui/portafolio/heading";
import { Metadata } from "next";
import BotonLlamado from "@/app/ui/portafolio/boton-llamada-accion";
import { ItemPortafolio, ItemTestimonio } from "@/app/lib/definitions";

async function fetchItemPortafolio() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/itemportafolio/?format=json`,
  );

  const data: ItemPortafolio[] = await res.json();

  return JSON.parse(
    "[\n" +
      "  {\n" +
      '    "images_config": {\n' +
      '      "id": 1,\n' +
      '      "image_folder": {\n' +
      '        "folder": "/img/fotos-concierto"\n' +
      "      },\n" +
      '      "width": 1908,\n' +
      '      "height": 1272\n' +
      "    },\n" +
      '    "titulo": "Vibraciones Inmortalizadas",\n' +
      '    "descripcion": "¡Transmite la energía de tus conciertos con imágenes impactantes! Soy un fotógrafo especializado en eventos musicales, capturo la pasión de tu música en cada actuación en vivo. Con años de experiencia, garantizo que cada foto capture la esencia única de tu presentación. Contáctame para llevar tu presencia en el escenario al siguiente nivel."\n' +
      "  },\n" +
      "  {\n" +
      '    "images_config": {\n' +
      '      "id": 2,\n' +
      '      "image_folder": {\n' +
      '        "folder": "/img/fotos-matrimonio"\n' +
      "      },\n" +
      '      "width": 1920,\n' +
      '      "height": 1280\n' +
      "    },\n" +
      '    "titulo": "Tu día más especial",\n' +
      '    "descripcion": "Bienvenido a la galería del matrimonio de Juan y María. Cada imagen cuenta una historia, un momento lleno de amor y emoción. Desde los votos hasta el baile, cada detalle es inmortalizado con pasión y creatividad. Permíteme ser parte de tu día especial y contar tu historia a través de mi lente."\n' +
      "  },\n" +
      "  {\n" +
      '    "images_config": {\n' +
      '      "id": 3,\n' +
      '      "image_folder": {\n' +
      '        "folder": "/img/fotos-retratos"\n' +
      "      },\n" +
      '      "width": 1920,\n' +
      '      "height": 1280\n' +
      "    },\n" +
      '    "titulo": "Captura tu esencia",\n' +
      '    "descripcion": "¿Buscas un retrato que capture tu verdadera esencia? Con años de experiencia y un enfoque dedicado a la excelencia, garantizo una sesión de fotografía personalizada que resalte lo mejor de ti. Cada imagen será una obra de arte atesorada para siempre. ¡Contáctame hoy y deja que inmortalice tu belleza!"\n' +
      "  }\n" +
      "]",
  );
}

async function fetchItemTestimonio() {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/itemtestimonio/?format=json`,
  );
  return await res.json();
}
// Force rebuild
export default async function Page() {
  const itemPortafolios: ItemPortafolio[] = await fetchItemPortafolio();
  const itemTestimonios: ItemTestimonio[] = await fetchItemTestimonio();

  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-12 lg:px-6">
        {Array.from({ length: itemPortafolios.length }).map((_, index) => (
          <Heading
            key={itemTestimonios[index].id}
            itemPortafolio={itemPortafolios[index]}
            testimonio={itemTestimonios[index]}
          />
        ))}
        <BotonLlamado />
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Portafolio",
};
