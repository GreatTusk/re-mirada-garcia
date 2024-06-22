import CarritoCompras from "@/app/ui/carrito-compras/carrito-compras";

/*
 * Es imposible acceder a esta página si no se está autenticado,
 * por lo que se puede asumir que el usuario es válido
 */

export default async function Page() {
  // Obtener la info del usuario
  // Solo se necesita el id del usuario
  return <CarritoCompras />;
}

export const dynamic = "force-dynamic";
