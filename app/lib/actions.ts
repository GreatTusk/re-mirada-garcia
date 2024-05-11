"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";

export type State = {
  errors?: {
    email?: string[];
    nombre?: string[];
    fono?: string[];
    consulta?: string[];
    boletin?: string[];
  };
  message?: string | null;
};

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
  estadoPrevio: State,
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
  try {
    await sql`
            INSERT INTO contactoventa (email, nombre, fono, consulta, boletin)
            VALUES (${camposValidados.data.email}, ${camposValidados.data.nombre}, ${camposValidados.data.fono},
                    ${camposValidados.data.consulta}, ${camposValidados.data.boletin})
        `;
  } catch (error) {
    return { message: "Error en la base de datos" + error };
  }
  return {
    errors: {},
    message: "Solicitud enviada exitosamente.",
  };
}
