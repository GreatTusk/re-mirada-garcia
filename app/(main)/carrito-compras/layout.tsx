import ContextoCarritoProvider from "@/app/contexts/carrito_context";
import { currentUser } from "@clerk/nextjs/server";
import {
  fetchCarritoProductos,
  fetchProductos,
  registrarUsuario,
  usuarioExists,
} from "@/app/lib/db";
import { Producto } from "@/app/lib/definitions";

export default async function TiendaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
  const carrito = await fetchCarritoProductos(userId || "");
  const productos: Producto[] = await fetchProductos();

  return (
    <ContextoCarritoProvider carritoInicial={carrito}>
      {children}
    </ContextoCarritoProvider>
  );
}
