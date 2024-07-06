"use server";

import { z } from "zod";
import { postProductoServicio } from "@/app/admin/lib/db";

export type ProductoServicioState = {
  errors?: {
    nombre?: string[];
    precio?: string[];
    precio_oferta?: string[];
    imagen_url?: string[];
    incluye?: string[];
    no_incluye?: string[];
  };
  message?: string | null;
};

const ProductoServicioSchema = z.object({
  nombre: z.string().max(50).min(3, {
    message: "El nombre no es válido.",
  }),
  precio: z.number().min(0.01, {
    message: "El precio no es válido.",
  }),
  precio_oferta: z.number().min(0.01, {
    message: "El precio de oferta no es válido.",
  }),
  imagen_url: z.string().min(4, {
    message: "La URL de la imagen no es válida.",
  }),
  incluye: z
    .array(
      z.string().min(3, {
        message: "El incluye no es válido.",
      }),
    )
    .min(1, { message: "Debe incluir al menos un servicio." }),
  no_incluye: z
    .array(
      z.string().min(1, {
        message: "El no incluye no es válido.",
      }),
    )
    .optional(),
});

export async function createProductoServicio(
  initialState: ProductoServicioState,
  formData: FormData,
  incluye: string[],
  noIncluye: string[],
) {
  const res = await parsearProductoServicio(
    initialState,
    formData,
    incluye,
    noIncluye,
  );
  if (res.message === null) {
    return res;
  }

  await postProductoServicio(res.message);

  return { errors: {}, message: "S" };
}
export async function updateProductoServicio(
  initialState: ProductoServicioState,
  formData: FormData,
  incluye: string[],
  noIncluye: string[],
) {
  const res = await parsearProductoServicio(
    initialState,
    formData,
    incluye,
    noIncluye,
  );
  if (res.message === null) {
    return res;
  }
  await postProductoServicio(res.message);

  return { errors: {}, message: "S" };
}

export async function parsearProductoServicio(
  initialState: ProductoServicioState,
  formData: FormData,
  incluye: string[],
  noIncluye: string[],
) {
  const camposValidados = ProductoServicioSchema.safeParse({
    nombre: formData.get("nombre"),
    precio: isNaN(parseInt(formData.get("precio") as string))
      ? 0
      : parseInt(formData.get("precio") as string),
    precio_oferta: isNaN(parseInt(formData.get("precio_oferta") as string))
      ? 0
      : parseInt(formData.get("precio_oferta") as string),
    imagen_url: formData.get("imagen_url"),
    incluye: incluye,
    no_incluye: noIncluye,
  });

  if (!camposValidados.success) {
    return {
      errors: camposValidados.error.flatten().fieldErrors,
      message: null,
    };
  }

  return {
    errors: {},
    message: JSON.stringify(camposValidados.data),
  };
}
