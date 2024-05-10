import {
  Cartablog,
  ItemPortafolio,
  ItemTestimonio,
  PlanFoto,
} from "@/app/lib/definitions";

export const imageUrls = [
  "/img/fotos-concierto",
  "/img/fotos-matrimonio",
  "/img/fotos-retratos",
];

export const itemConcierto: ItemPortafolio = {
  imagesConfig: {
    imageFolder: imageUrls[0],
    width: 1908,
    height: 1272,
  },
  titulo: "Vibraciones Inmortalizadas",
  descripcion:
    "¡Transmite la energía de tus conciertos con imágenes impactantes! Soy un fotógrafo especializado en eventos " +
    "musicales, capturo la pasión de tu música en cada actuación en vivo. Con años de experiencia, garantizo que " +
    "cada foto capture la esencia única de tu presentación. Contáctame para llevar tu presencia en el escenario al siguiente nivel.",
};

export const itemMatrimonio: ItemPortafolio = {
  imagesConfig: {
    imageFolder: imageUrls[1],
    width: 1920,
    height: 1280,
  },
  titulo: "Tu día más especial",
  descripcion:
    "Bienvenido a la galería del matrimonio de Juan y María. Cada imagen cuenta una historia, un " +
    "momento lleno de amor y emoción. Desde los votos hasta el baile, cada detalle es inmortalizado " +
    "con pasión y creatividad. Permíteme ser parte de tu día especial y contar tu historia a través de mi lente.",
};

export const itemRetrato: ItemPortafolio = {
  imagesConfig: {
    imageFolder: imageUrls[2],
    width: 1920,
    height: 1280,
  },
  titulo: "Captura tu esencia",
  descripcion:
    "¿Buscas un retrato que capture tu verdadera esencia? Con años de experiencia y un " +
    "enfoque dedicado a la excelencia, garantizo una sesión de fotografía personalizada " +
    "que resalte lo mejor de ti. Cada imagen será una obra de arte atesorada para siempre. " +
    "¡Contáctame hoy y deja que inmortalice tu belleza!",
};

export const testimonioConcierto: ItemTestimonio = {
  cliente: {
    nombre: "Jairo Vera",
    ocupacion: "Cantante urbano",
    imageUrl: `${imageUrls[0]}/1.jpg`,
  },
  testimonio:
    "¡Increíble! Las fotos del concierto capturaron la energía y la pasión de la música.",
};

export const testimonioMatrimonio: ItemTestimonio = {
  cliente: {
    nombre: "María",
    ocupacion: "Novia",
    imageUrl: `${imageUrls[1]}/1.jpg`, // Ajusta el índice según corresponda
  },
  testimonio:
    "¡Simplemente mágico! Las fotografías de nuestra boda capturaron cada momento especial y nos permiten revivir ese día tan importante una y otra vez. Gracias por su increíble trabajo.",
};

export const testimonioRetrato: ItemTestimonio = {
  cliente: {
    nombre: "Elena",
    ocupacion: "Modelo",
    imageUrl: `${imageUrls[2]}/5.jpg`, // Ajusta el índice según corresponda
  },
  testimonio:
    "¡Me encanta! La sesión de fotos para mi retrato fue una experiencia increíble. Capturaste mi personalidad de una manera única y hermosa. ¡Gracias por tu talento y profesionalismo!",
};

export const planXpress: PlanFoto = {
  titulo: "Plan Xpress",
  precio: 260000,
  incluye: {
    servicios: [
      "Sesión documental del evento",
      "Edición profesional de las fotografías",
      "Entrega de 100 fotografías digitales en alta resolución",
      "2 horas de cobertura",
    ],
  },
  noIncluye: {
    servicios: [
      "Fotógrafo adicional",
      "Sesión artística en exteriores",
      "Sesión pre-evento",
      "Fotografías originales sin editar",
    ],
  },
};

export const planPetite: PlanFoto = {
  titulo: "Plan Petite",
  precio: 480000,
  incluye: {
    servicios: [
      "Sesión documental del evento",
      "Sesión artística en exteriores",
      "Edición profesional de las fotografías",
      "Entrega de 200 fotografías digitales en alta resolución",
      "Fotógrafo adicional",
      "4 horas de cobertura",
    ],
  },
  noIncluye: {
    servicios: ["Sesión pre-evento", "Fotografías originales sin editar"],
  },
};

export const planPlus: PlanFoto = {
  titulo: "Plan Plus",
  precio: 1550000,
  incluye: {
    servicios: [
      "Sesión documental desde los preparativos hasta la celebración del evento",
      "Sesión artística en exteriores",
      "Edición profesional de las fotografías",
      "Entrega de 650 fotografías digitales en alta resolución",
      "2 Fotógrafos adicionales",
      "10 horas de cobertura",
      "Fotografías originales sin editar",
    ],
  },
  noIncluye: { servicios: [] },
};

export const links = [
  { path: "/", label: "Inicio" },
  { path: "/portafolio", label: "Portafolio" },
  { path: "/tienda", label: "Tienda" },
  { path: "/blog", label: "Blog" },
  { path: "/nuestra_vision", label: "Nuestra visión" },
  { path: "/legal", label: "Legal" },
];

export const primerpost: Cartablog = {
  titulo:
    "Ideas originales que harán que la entrada de los novios sea inolvidable",
  tag: "Matrimonios",
  contenido:
    "El trayecto hacia el matrimonio implica imaginar una y otra vez ese momento especial, experimentando emociones intensas pero también ciertos nervios. Es completamente normal y válido sentirse así durante este proceso, que puede resultar sumamente divertido. ¿Cómo lograrlo? Pues, ¡pensando en ideas que hagan que cada etapa [...]",
  fechapub: "09-05-2024",
  id: "1",
};

export const segundopost: Cartablog = {
  titulo: "Wedding Awards 2023",
  contenido:
    "Las parejas escogen a Darío García como uno de los mejores profesionales de matrimonios del país. – Matrimonios.cl celebra la 10a edición de los prestigiosos premios Wedding Awards, en los que participan las más de 17.000 empresas registradas en el portal. – El valor de los Wedding Awards reside […]",
  fechapub: "20-05-2024",
  id: "2",
  tag: "Matrimonios",
};
export const posts: Cartablog[] = [primerpost, segundopost];
