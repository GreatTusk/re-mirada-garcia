import { ProductoCarrito, Usuario } from "@/app/lib/definitions";
import { unstable_noStore as noStore } from "next/cache";
export async function fetchCarritoProductos(userId: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/carrito_productos/?carrito=${userId}&format=json`,
  );
  return await response.json();
}

export async function usuarioExists(userId: string | undefined) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/usuario/${userId}/?format=json`,
  );
  return response.status === 200;
}

export async function registrarUsuario(userData: Usuario) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/register_usuario/?format=json`,
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

export async function addToCart(
  producto_id: number,
  user_id: string | undefined,
) {
  if (user_id !== undefined) {
    const producto_carrito = {
      carrito: user_id,
      producto: producto_id,
      cantidad: 1,
    };

    const response = await fetch(
      `${process.env.BACKEND_URL}/api/carrito_productos/?format=json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto_carrito),
      },
    );
    if (response.status !== 201) {
      return;
    }
    return await response.json();
  }
}

export async function updateProductoCarrito(
  usuarioId: string,
  productoId: string,
  cantidad: number,
) {
  const nuevo_producto = {
    carrito: usuarioId,
    producto: productoId,
    cantidad: cantidad,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_productos/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevo_producto),
    },
  );
  return await response.json();
}

export async function deleteProductoCarrito(productoCarritoId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_productos/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ producto: productoCarritoId }),
    },
  );
  return await response.json();
}
