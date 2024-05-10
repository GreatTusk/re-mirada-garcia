import CarritoCompras from "@/app/ui/tienda/carrito-compras/carrito-compras";
import { auth, currentUser } from "@clerk/nextjs/server";
import { crearUsuario } from "@/app/lib/db";

export default async function Page() {
  const { userId } = auth();
  const user = await currentUser();

  let usuario = await crearUsuario(
    user?.fullName || "",
    user?.emailAddresses?.[0]?.emailAddress || "",
  );
  return <CarritoCompras />;
}
