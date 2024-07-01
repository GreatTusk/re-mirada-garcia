"use server";
import { checkRole } from "@/app/lib/roles";
import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { postPedido } from "@/app/lib/db";

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
    nombre_empresa?: string[];
    rut_empresa?: string[];
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
  nombre_empresa: z.nullable(z.string()),
  rut_empresa: z.nullable(z.string()),
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
  fecha: z.string().max(50).min(3, {
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
  user_id: string,
) {
  const camposValidados = PedidoSchema.safeParse({
    nombre_empresa: formData.get("company_name"),
    rut_empresa: formData.get("vat_number"),
    nombre: formData.get("first_name_billing_modal"),
    apellido: formData.get("last_name_billing_modal"),
    email: formData.get("email_billing_modal"),
    direccion: formData.get("saved-address-modal"),
    region: formData.get("select_region_input_billing_modal"),
    comuna: formData.get("select_comuna_input_billing_modal"),
    telefono: formData.get("phone-input"),
    descripcion: formData.get("descripcion_billing_modal"),
    metodo_pago: formData.get("metodo_pago"),
    fecha: formData.get("date"),
  });

  if (!camposValidados.success) {
    return {
      errors: camposValidados.error.flatten().fieldErrors,
      message: "Faltan campos. No se pudo enviar la solicitud.",
    };
  }

  const data = {
    ...camposValidados.data,
    user_id,
  };
  await postPedido(data);

  // Enviar el pedido a la base de datos

  return {
    errors: {},
    message: "S",
  };
}

export async function setRole(formData: FormData) {
  // Check that the user trying to set the role is an admin
  if (!checkRole("admin")) {
    return { message: "Not Authorized" };
  }

  try {
    const res = await clerkClient.users.updateUser(
      formData.get("id") as string,
      {
        publicMetadata: { role: formData.get("role") },
      },
    );
    return { message: res.publicMetadata };
  } catch (err) {
    return { message: err };
  }
}
