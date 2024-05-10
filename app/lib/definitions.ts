export type ItemPortafolio = {
  imagesConfig: ImageConfigPortafolio;
  titulo: string;
  descripcion: string;
};

export type ImageConfigPortafolio = {
  imageFolder: string;
  width: number;
  height: number;
};

export type PlanFoto = {
  titulo: string;
  precio: number;
  incluye: Servicios;
  noIncluye: Servicios;
};

export type Servicios = {
  servicios: string[];
};

export type Cliente = {
  nombre: string;
  imageUrl: string;
  ocupacion: string;
};

export type ItemTestimonio = {
  cliente: Cliente;
  testimonio: string;
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
  id: string;
  nombre: string;
  precio: number;
  imagenUrl: string;
  precioOferta?: number;
};
export type ProductoCarrito = {
  producto: Producto;
  cantidad: number;
};

export type Usuario = {
  id: string;
  nombre: string;
  email: string;
  contrasena: string;
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
  contenido: string;
  fechapub: string;
  tag: string;
};
