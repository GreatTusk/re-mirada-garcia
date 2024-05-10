import { sql } from "@vercel/postgres";

export async function crearUsuario(nombre: string, email: string) {
  try {
    const result = await sql`
      INSERT INTO Usuario (nombre, email)
      VALUES (${nombre}, ${email})
      RETURNING *;
    `;

    return result;
  } catch (error) {}
}
