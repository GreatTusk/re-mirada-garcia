import ContextoCarritoProvider from "@/app/contexts/carrito_context";
import { currentUser } from "@clerk/nextjs/server";
import {
  fetchCarritoProductos,
  registrarUsuario,
  usuarioExists,
} from "@/app/lib/db";
import { Usuario } from "@/app/lib/definitions";

export default async function TiendaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  const usuario: Usuario = {
    id: user?.id || "",
    first_name: user?.firstName || "",
    last_name: user?.lastName || "",
    email: user?.emailAddresses?.[0]?.emailAddress || "",
    phone_number: user?.phoneNumbers[0]?.phoneNumber || "",
  };

  // Registrar el usuario si no existe
  if (!(await usuarioExists(usuario.id))) {
    // Registrar usuario crea un carrito vacio
    await registrarUsuario(usuario);
  }
  const carrito = await fetchCarritoProductos(usuario.id || "");
  return (
    <ContextoCarritoProvider carritoInicial={carrito}>
      {children}
    </ContextoCarritoProvider>
  );
}
