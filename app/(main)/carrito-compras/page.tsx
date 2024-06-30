import CarritoCompras from "@/app/ui/carrito-compras/carrito-compras";
import { fetchProductos } from "@/app/lib/db";

/*
 * Es imposible acceder a esta página si no se está autenticado,
 * por lo que se puede asumir que el usuario es válido
 */

export default async function Page() {
  const productos = await fetchProductos();
  return <CarritoCompras productos={productos} />;
}

export const dynamic = "force-dynamic";
