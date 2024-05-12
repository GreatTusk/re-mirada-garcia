import CarritoCompras from "@/app/ui/tienda/carrito-compras/carrito-compras";
import { auth, currentUser } from "@clerk/nextjs/server";
import { crearUsuario } from "@/app/lib/db";
import { Usuario } from "@/app/lib/definitions";

export default async function Page() {
  const { userId } = auth();
  const user = await currentUser();

  let usuario: Usuario = {
    id: user?.id || "",
    nombre: user?.fullName || "",
    email: user?.emailAddresses?.[0]?.emailAddress || "",
  };

  return <CarritoCompras usuario={usuario} />;
}
