export type ItemPortafolio = {
  images_config: ImageConfigPortafolio;
  titulo: string;
  descripcion: string;
};

export type ImageConfigPortafolio = {
  image_folder: ImageFolder;
  width: number;
  height: number;
};

type ImageFolder = { folder: string };

export type Cliente = {
  nombre: string;
  image_url: string;
  ocupacion: string;
};

export type ItemTestimonio = {
  id: number;
  cliente: Cliente;
  testimonio: string;
};

export type PlanFoto = {
  id: string;
  titulo: string;
  precio: number;
  incluye: Servicios;
  noIncluye: Servicios;
};

export type Servicios = {
  servicios: string[];
};

export type ContactoVenta = {
  id: string;
  email: string;
  nombre: string;
  fono: string;
  consulta: string;
  boletin: string;
};

export type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen_url: string;
  precio_oferta?: number;
};

export type ProductoCarrito = {
  id: string;
  producto_carrito: Producto;
  cantidad: number;
};

export type Usuario = {
  id: string;
  nombre: string;
  email: string;
};

export type Carrito = {
  id: string;
  usuario: Usuario;
  productos: ProductoCarrito[];
  precioTotal: number;
  ahorros: number;
};

export type Cartablog = {
  id: string;
  titulo: string;
  bajadaTitulo: string;
  secciones: Seccion[];
  fechapub: string;
  tag: string;
  cita?: string;
};

export type Seccion = {
  titulo: string;
  bajadaTexto?: string;
  parrafos?: string[];
  imagen?: BlogImagen;
  lista?: ListaItem[];
};

export type ListaItem = {
  titulo: string;
  texto: string;
};

export type BlogImagen = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  caption: string;
};

export type Region = {
  region: string;
  comunas: string[];
};

export type Pedido = {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  direccion: string;
  region: string;
  comuna: string;
  telefono: string;
  descripcion: string;
  fecha: string;
  metodo_pago: string;
  carrito: Carrito;
};
