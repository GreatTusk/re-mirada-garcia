export type ItemPortafolio = {
    imagesConfig: ImageConfigPortafolio,
    titulo: string,
    descripcion: string
}

export type ImageConfigPortafolio = {
    imageFolder: string,
    width: number,
    height: number
}

export type PlanFoto = {
    titulo: string,
    precio: number,
    incluye: Servicios,
    noIncluye: Servicios

}

export type Servicios = {
    servicios: string[]
}