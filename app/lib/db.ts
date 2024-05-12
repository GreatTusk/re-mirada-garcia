import { sql } from "@vercel/postgres";
import { PlanFoto } from "@/app/lib/definitions";

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

export async function fetchPlanesFoto() {
  try {
    const res = await sql`
    SELECT * FROM plan_foto ORDER BY PRECIO
       `;

    return res.rows.map(
      (row): PlanFoto => ({
        id: row.id,
        titulo: row.titulo,
        precio: row.precio,
        incluye: { servicios: row.incluye.split(", ") },
        noIncluye: {
          servicios: row.no_incluye ? row.no_incluye.split(", ") : [],
        },
      }),
    );
  } catch (error) {
    return [];
  }
}

export async function fetchPlanFotoById(id: string) {
  try {
    const res = await sql`
    SELECT  pf.titulo, pf.precio, 
              json_agg(DISTINCT s_incluye.servicio) AS incluye_servicios,
              json_agg(DISTINCT s_no_incluye.servicio) AS no_incluye_servicios
       FROM plan_foto pf
       LEFT JOIN plan_servicios ps_incluye ON pf.id = ps_incluye.plan_id
       LEFT JOIN plan_servicios ps_no_incluye ON pf.id = ps_no_incluye.plan_id
       LEFT JOIN servicios s_incluye ON ps_incluye.servicio_id = s_incluye.id
       LEFT JOIN servicios s_no_incluye ON ps_no_incluye.servicio_id = s_no_incluye.id
       WHERE pf.id = ${id}
       GROUP BY pf.id
       `;

    return res.rows.map(
      (row): PlanFoto => ({
        id: id,
        titulo: row.titulo,
        precio: row.precio,
        incluye: { servicios: row.incluye_servicios || [] },
        noIncluye: { servicios: row.no_incluye_servicios || [] },
      }),
    )[0];
  } catch (error) {}
}
