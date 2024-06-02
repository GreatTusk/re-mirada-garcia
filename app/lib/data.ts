import {
  Cartablog,
  ItemPortafolio,
  ItemTestimonio,
  PlanFoto,
  Seccion,
} from "@/app/lib/definitions";

export const links = [
  { path: "/", label: "Inicio" },
  { path: "/portafolio", label: "Portafolio" },
  { path: "/tienda", label: "Tienda" },
  { path: "/tienda/carrito-compras", label: "Carrito" },
  { path: "/blog", label: "Blog" },
  { path: "/nuestra_vision", label: "Nuestra visión" },
  { path: "/legal", label: "Legal" },
];

const seccionBlog: Seccion = {
  titulo: "Una pasión convertida en éxito",
  parrafos: [
    "Comenzar en el mundo de la fotografía de bodas puede ser un desafío, pero con pasión y dedicación, cada momento capturado puede ser una obra maestra. Durante años, he tenido el privilegio de documentar los días más especiales de las parejas, y cada experiencia ha sido única y enriquecedora.",
    "Con cada boda, no solo estoy capturando imágenes, sino que también estoy contando una historia. Desde los preparativos emocionantes hasta el intercambio de votos conmovedores y la alegría desbordante en la pista de baile, mi objetivo es inmortalizar cada momento para que las parejas puedan revivir esos preciosos recuerdos una y otra vez.",
  ],
  imagen: {
    src: "/img/fotos-matrimonio/5.jpg",
    alt: "Foto de matrimonio",
    width: 1920,
    height: 1280,
    className: "rounded-lg",
    caption: "Por Darío García",
  },
};
const seccionBlog2: Seccion = {
  titulo: "Perfeccionando mi arte",
  parrafos: [
    "La fotografía de bodas requiere más que simplemente apuntar y disparar. Es un arte que exige habilidad técnica, creatividad y sensibilidad para capturar la esencia de cada momento. A lo largo de los años, he perfeccionado mi técnica y he explorado nuevas formas de expresión artística para ofrecer a mis clientes un trabajo que va más allá de sus expectativas.",
    "Desde la composición y la iluminación hasta la edición y el montaje final, cada aspecto de mi trabajo es cuidadosamente considerado para asegurarme de que cada imagen sea una obra maestra por derecho propio.",
  ],
};

const seccionBlog3: Seccion = {
  titulo: "Un viaje visual",
  parrafos: [
    "La fotografía de bodas es un viaje visual que comienza mucho antes del gran día. Desde la primera reunión con los novios hasta la entrega del álbum final, cada paso del proceso es una oportunidad para crear recuerdos duraderos y significativos.",
    "Mi objetivo es acompañar a las parejas en este viaje, brindando un servicio personalizado y adaptado a sus necesidades y deseos. Cada boda es única, y mi enfoque es capturar la esencia de cada pareja de una manera auténtica y emotiva.",
  ],
};

const seccionBlog4: Seccion = {
  titulo: "El éxito en cada sonrisa",
  parrafos: [
    "El verdadero éxito en la fotografía de bodas no se mide en premios o reconocimientos, sino en las sonrisas y lágrimas de felicidad de las parejas cuando ven sus fotos por primera vez. Ver la emoción en los rostros de mis clientes y saber que he capturado momentos que atesorarán para siempre es lo que hace que cada boda valga la pena.",
  ],
};

const seccionBlog5: Seccion = {
  titulo: "Desafíos superados, satisfacción alcanzada",
  lista: [
    {
      titulo: "Pruebas de usabilidad",
      texto:
        "¿Sabe su usuario cómo salir de las pantallas? ¿Pueden seguir su viaje de usuario previsto y comprar algo en el sitio que ha diseñado? Al realizar una prueba de usabilidad, podrá ver cómo interactúan los usuarios con su diseño una vez que esté en vivo;",
    },
    {
      titulo: "Involucrando a las partes interesadas",
      texto:
        "¿Necesita comprobar si sus casillas de consentimiento de GDPR se muestran correctamente? Pase su prototipo a su equipo de protección de datos y podrán probarlo de verdad;",
    },
    {
      titulo: "Impresionando a un cliente",
      texto:
        "Los prototipos pueden ayudar a explicar o incluso vender su idea al proporcionar a su cliente una experiencia práctica;",
    },
    {
      titulo: "Comunicando su visión",
      texto:
        "Al usar un medio interactivo para previsualizar y probar elementos de diseño, los diseñadores y desarrolladores pueden entenderse mejor entre sí y el proyecto.",
    },
  ],
  parrafos: [
    "Cada boda es un nuevo desafío y una oportunidad para superar mis límites creativos. Mi compromiso con la excelencia significa que nunca dejo de aprender y crecer como fotógrafo, siempre buscando nuevas formas de elevar mi arte y ofrecer a mis clientes un servicio excepcional.",
  ],
};

export const segundopost: Cartablog = {
  titulo: "Revelando Emociones: Un Viaje a Través de la Fotografía de Bodas",
  bajadaTitulo: "Descubriendo la esencia de cada momento",
  secciones: [
    seccionBlog,
    seccionBlog2,
    seccionBlog3,
    seccionBlog4,
    seccionBlog5,
  ],
  fechapub: "20-05-2024",
  id: "2",
  tag: "Matrimonios",
  cita: "La verdadera belleza de la fotografía de bodas radica en su capacidad para capturar la esencia misma del amor y la alegría en su forma más pura y auténtica.",
};

const s1: Seccion = {
  titulo: "Capturando momentos únicos",
  parrafos: [
    "Como fotógrafo, mi objetivo es ir más allá de simplemente tomar fotografías; se trata de capturar la esencia y la personalidad de mis clientes en cada imagen. Cada sesión de fotos es una oportunidad para crear recuerdos duraderos y significativos.",
    "Desde retratos individuales hasta sesiones familiares, mi enfoque es crear un ambiente relajado y cómodo donde mis clientes puedan ser ellos mismos. Creo que la mejor fotografía surge cuando las personas se sienten genuinas y auténticas frente a la cámara.",
  ],
};

const s2: Seccion = {
  titulo: "Explorando la creatividad",
  parrafos: [
    "Cada sesión de fotos es única y me encanta experimentar con diferentes estilos y técnicas para reflejar la personalidad y el estilo de mis clientes. Ya sea en un estudio o en locaciones al aire libre, siempre estoy buscando nuevas formas de crear imágenes impactantes y memorables.",
    "La creatividad es clave en mi trabajo, y estoy constantemente inspirado por las personas que fotografío y el mundo que me rodea. Desde la composición y la iluminación hasta la postproducción, cada detalle cuenta para crear una imagen que cuente una historia y emocione a quienes la vean.",
  ],
};

const s3: Seccion = {
  titulo: "La importancia de la conexión",
  parrafos: [
    "Una de las partes más gratificantes de mi trabajo es poder conectar con mis clientes a un nivel personal y emocional. Creo que esta conexión es fundamental para capturar la verdadera esencia de cada individuo y crear imágenes que sean auténticas y significativas.",
    "Antes de cada sesión, dedico tiempo a conocer a mis clientes, entender sus intereses, pasiones y lo que los hace únicos. Esta conexión se refleja en mis fotografías, creando imágenes que no solo son hermosas visualmente, sino que también transmiten la verdadera esencia de quienes están frente a la cámara.",
  ],
};

const s4: Seccion = {
  titulo: "Celebrando la individualidad",
  parrafos: [
    "Cada persona es única y me encanta celebrar esa individualidad en mis fotografías. Ya sea capturando la sonrisa de un niño juguetón, la mirada de complicidad entre una pareja o la serenidad de una persona mayor, mi objetivo es resaltar lo que hace que cada individuo sea especial.",
    "Creo que la verdadera belleza radica en la autenticidad y la honestidad, y busco reflejar eso en cada imagen que capturo. En un mundo donde la imagen juega un papel tan importante, me esfuerzo por crear fotografías que no solo sean estéticamente hermosas, sino también profundamente significativas.",
  ],
  imagen: {
    src: "/img/fotos-retratos/4.jpg",
    alt: "Foto de retrato",
    width: 1920,
    height: 1280,
    className: "rounded-lg",
    caption: "Por Darío García",
  },
};

const s5: Seccion = {
  titulo: "Desafiando los límites",
  lista: [
    {
      titulo: "Explorando nuevos horizontes",
      texto:
        "Siempre estoy buscando nuevas oportunidades para crecer y mejorar como fotógrafo. Ya sea aprendiendo nuevas técnicas, explorando nuevas locaciones o colaborando con otros profesionales creativos, creo que el aprendizaje continuo es clave para mantenerse inspirado y seguir evolucionando en mi arte.",
    },
    {
      titulo: "Superando obstáculos",
      texto:
        "Cada sesión de fotos presenta sus propios desafíos, ya sea el clima impredecible, la falta de luz o la timidez de mis clientes. Sin embargo, creo que es en esos momentos de adversidad donde surge la verdadera creatividad y se crean las imágenes más poderosas.",
    },
    {
      titulo: "Buscando la excelencia",
      texto:
        "Mi objetivo es ofrecer a mis clientes un servicio excepcional y superar sus expectativas en cada sesión de fotos. Desde la planificación hasta la entrega final, me esfuerzo por brindar una experiencia única y memorable que deje una impresión duradera en quienes confían en mí para capturar sus momentos más preciados.",
    },
  ],
};

export const primerpost: Cartablog = {
  titulo: "Retratos: Explorando la individualidad a través de la lente",
  bajadaTitulo: "Descubriendo la esencia de cada persona.",
  secciones: [s1, s2, s3, s4, s5],
  fechapub: "12-06-2024",
  id: "1",
  tag: "Retratos",
};

export const posts: Cartablog[] = [primerpost, segundopost];
