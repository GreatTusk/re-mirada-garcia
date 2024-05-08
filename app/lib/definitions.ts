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
  email: string;
  nombre: string;
  fono: string;
  consulta: string;
  boletin: string;
};
