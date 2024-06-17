import { ProductoCarrito, Usuario } from "@/app/lib/definitions";

export async function fetchCarritoProductos(userId: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/carrito_productos/?carrito=${userId}&format=json`,
  );
  return await response.json();
}

export async function fetchCarritoProductosClient(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_productos/?carrito=${userId}&format=json`,
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

export async function addToCart(producto: {
  id_usuario: string;
  producto_carrito: number;
  cantidad: number;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_productos/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    },
  );
  if (response.status !== 201) {
    return;
  }
  return await response.json();
}

export async function updateProductoCarrito(
  productoId: string,
  cantidad: number,
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_productos/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        producto: productoId,
        cantidad: cantidad,
      }),
    },
  );
  return await response.json();
}

export async function deleteProductoCarrito(productoCarritoId: string) {
  console.log(productoCarritoId)
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

export async function fetchProductos() {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/producto/?format=json`,
  );
  return await response.json();
}
