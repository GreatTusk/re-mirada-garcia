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
  carrito: string;
};

export type Usuario = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: string;
};

export type Carrito = {
  usuario: Usuario;
  carrito_producto: ProductoCarrito[];
  id_pedido_confirmado?: string;
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
  carrito: string;
  direccion: string;
  region: string;
  comuna: string;
  descripcion: string;
  fecha: string;
  metodo_pago: string;
  nombre_empresa?: string;
  rut_empresa?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

export type PedidoConfirmado = {
  id_pedido: string;
  usuario: string;
  direccion: string;
  region: string;
  comuna: string;
  descripcion: string;
  fecha: string;
  metodo_pago: string;
  nombre_empresa?: string;
  rut_empresa?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  fecha_creacion: string;
  carrito: ProductoCarritoWrapper;
};

export type ProductoCarritoWrapper = {
  productos: ProductoCarrito[];
};
