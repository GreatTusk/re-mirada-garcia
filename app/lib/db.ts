import { Usuario } from "@/app/lib/definitions";

export async function fetchCarritoProductos(userId: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/carrito_productos/?carrito=${userId}&format=json`,
  );
  return await response.json();
}

export async function fetchUsuario(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/usuario/${userId}/?format=json`,
  );
  return await response.json();
}

export async function fetchProductoConfirmado(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pedidohistorico/${userId}/?format=json`,
  );
  return await response.json();
}

export async function fetchPedidosConfirmados(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_pedido/?userId=${userId}&format=json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return await response.json();
}

export async function fetchDetallePedidoConfirmado(pedidoId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/productos_pedido/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pedidoId: pedidoId }),
    },
  );
  const res = await response.json();
  console.log(res);
  return res;
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

export async function fetchPedido(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pedido/${id}/?format=json`,
  );
  return await response.json();
}

export async function fetchPedidoHistorico(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pedidohistorico/${id}/?format=json`,
  );
  return await response.json();
}

export async function deletePedidoHistorico(id: string) {
  await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pedidohistorico/${id}/?format=json`,
    {
      method: "DELETE",
    },
  );
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

export async function postPedido(pedido: {}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_pedido/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    },
  );
  if (response.status !== 201 && response.status !== 200) {
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

export async function confirmPedido(pedidoId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/carrito_pedido/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_pedido: pedidoId }),
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
