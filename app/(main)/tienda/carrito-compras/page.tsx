import CarritoCompras from "@/app/ui/tienda/carrito-compras/carrito-compras";
import { currentUser } from "@clerk/nextjs/server";
import { registrarUsuario, usuarioExists } from "@/app/lib/db";

/*
 * Es imposible acceder a esta página si no se está autenticado,
 * por lo que se puede asumir que el usuario es válido
 */

export default async function Page() {
  // Obtener la info del usuario
  const user = await currentUser();
  const userId = user?.id;
  // Registrar el usuario si no existe
  if (!(await usuarioExists(userId))) {
    await registrarUsuario({
      id: userId || "",
      nombre: user?.fullName || "",
      email: user?.emailAddresses?.[0]?.emailAddress || "",
    });
  }
  // Solo se necesita el id del usuario
  return <CarritoCompras usuarioId={userId || ""} />;
}

export const dynamic = "force-dynamic";
