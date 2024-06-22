"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";

export type ContactState = {
  errors?: {
    email?: string[];
    nombre?: string[];
    fono?: string[];
    consulta?: string[];
    boletin?: string[];
  };
  message?: string | null;
};

export type PedidoState = {
  errors?: {
    nombre?: string[];
    apellido?: string[];
    email?: string[];
    direccion?: string[];
    region?: string[];
    comuna?: string[];
    telefono?: string[];
    descripcion?: string[];
    fecha?: string[];
    metodo_pago?: string[];
  };
  message?: string | null;
};

const PedidoSchema = z.object({
  nombre: z.string().max(50).min(3, {
    message: "El nombre no es válido.",
  }),
  apellido: z.string().max(50).min(3, {
    message: "El apellido no es válido.",
  }),
  email: z.string().email({
    message: "Por favor, ingrese un correo válido.",
  }),
  direccion: z.string().max(100).min(10, {
    message: "La dirección no es válida.",
  }),
  region: z.string().max(50).min(3, {
    message: "La región no es válida.",
  }),
  comuna: z.string().max(50).min(3, {
    message: "La comuna no es válida.",
  }),
  telefono: z.string().length(9, {
    message: "El número de teléfono debe tener 9 dígitos.",
  }),
  descripcion: z.string().trim().max(1000).min(10, {
    message: "La descripción debe tener al menos 10 caracteres.",
  }),
  fecha: z.string().length(10, {
    message: "La fecha no es válida.",
  }),
  metodo_pago: z.string().max(50).min(3, {
    message: "El método de pago no es válido.",
  }),
});

const ContactSchema = z.object({
  email: z.string().email({
    message: "Por favor, ingrese un correo válido.",
  }),
  nombre: z.string().max(50).min(3, {
    message: "El nombre no es válido.",
  }),
  fono: z.string().length(9, {
    message: "El número de teléfono debe tener 9 dígitos.",
  }),
  consulta: z.string().trim().max(1000).min(10, {
    message: "La consulta debe tener al menos 10 caracteres.",
  }),
  boletin: z.nullable(z.string()),
});

export async function crearContactoVenta(
  estadoPrevio: ContactState,
  formData: FormData,
) {
  const camposValidados = ContactSchema.safeParse({
    email: formData.get("email"),
    nombre: formData.get("nombre"),
    fono: formData.get("fono"),
    consulta: formData.get("consulta"),
    boletin: formData.get("boletin"),
  });

  if (!camposValidados.success) {
    return {
      errors: camposValidados.error.flatten().fieldErrors,
      message: "Faltan campos. No se pudo enviar la solicitud.",
    };
  }

  const { nombre, boletin, consulta, email, fono } = camposValidados.data;
  try {
    await sql`
            INSERT INTO contactoventa (email, nombre, fono, consulta, boletin)
            VALUES (${email}, ${nombre}, ${fono},
                    ${consulta}, ${boletin === null ? "no" : "si"})
        `;
  } catch (error) {
    return { message: "Error en la base de datos" + error };
  }

  return {
    errors: {},
    message: "Solicitud enviada exitosamente.",
  };
}

export async function crearPedido(
  estadoPrevio: PedidoState,
  formData: FormData,
) {
  const camposValidados = PedidoSchema.safeParse({
    nombre: formData.get("nombre"),
    apellido: formData.get("apellido"),
    email: formData.get("email"),
    direccion: formData.get("direccion"),
    region: formData.get("region"),
    comuna: formData.get("comuna"),
    telefono: formData.get("telefono"),
    descripcion: formData.get("descripcion"),
    fecha: formData.get("fecha"),
    metodo_pago: formData.get("metodo_pago"),
  });

  if (!camposValidados.success) {
    return {
      errors: camposValidados.error.flatten().fieldErrors,
      message: "Faltan campos. No se pudo enviar la solicitud.",
    };
  }

  const {
    nombre,
    apellido,
    email,
    direccion,
    region,
    comuna,
    telefono,
    descripcion,
    fecha,
    metodo_pago,
  } = camposValidados.data;

  // Enviar el pedido a la base de datos

  return {
    errors: {},
    message: "Solicitud enviada exitosamente.",
  };
}
