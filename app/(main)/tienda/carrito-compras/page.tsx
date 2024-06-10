import CarritoCompras from "@/app/ui/tienda/carrito-compras/carrito-compras";
import { auth, currentUser } from "@clerk/nextjs/server";
import { crearUsuario } from "@/app/lib/db";
import { Usuario } from "@/app/lib/definitions";

export default async function Page() {
  // Obtener la info del usuario
  const user = await currentUser();

  let usuario: Usuario = {
    id: user?.id || "",
    nombre: user?.fullName || "",
    email: user?.emailAddresses?.[0]?.emailAddress || "",
  };

  // Mandarla a la base de datos
  try {
    await registrarUsuario(usuario);
  } catch (error) {
    console.error("Ya existe el usuario");
  } finally {

  }

  return <CarritoCompras usuario={usuario} />;
}

async function fetchCarrito(carrito_id: string) {
  const res = await fetch(
    `${process.env.BACKEND_URL}/api/carrito/${carrito_id}/?format=json`,
  );
  return await res.json();
}

async function registrarUsuario(userData: Usuario) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/usuario/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );
  if (response.status !== 201) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

async function crearCarrito(userData: Usuario) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/carrito/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  if (response.status !== 201) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
