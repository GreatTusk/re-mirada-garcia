import { unstable_noStore as noStore } from "next/cache";

export async function fetchRevenue() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_total_recaudado/?format=json`,
  );
  return await response.json();
}

export async function fetchPedidosQuantity() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_total_pedidos/?format=json`,
  );
  return await response.json();
}

export async function fetchTotalUsuarios() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_total_usuarios/?format=json`,
  );
  return await response.json();
}

export async function fetchAllPedidos() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/carrito_pedido/?format=json`,
  );
  return await response.json();
}

export async function fetchPedidoHistorico() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/pedidohistorico/?format=json`,
  );
  return await response.json();
}

export async function fetchRecaudacionMensual() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_recaudado_por_mes/?format=json`,
  );
  return await response.json();
}

export async function fetchProductoById(id: string) {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/producto/${id}/?format=json`,
  );
  return await response.json();
}

export async function fetchProductoServicioById(id: string) {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_info_productos/?id=${id}&format=json`,
  );
  if (response.status !== 200) {
    return null;
  }
  return await response.json();
}

export async function postProductoServicio(data: string) {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_info_productos/?format=json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    },
  );
  return await response.json();
}

export async function fetchPedidoDetalle(id_pedido: string) {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_pedido_detalle/?id_pedido=${id_pedido}&format=json`,
  );
  if (response.status !== 200) {
    return null;
  }
  return await response.json();
}

export async function fetchAllUsersIds() {
  noStore();

  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_user_ids/?format=json`,
  );
  return await response.json();
}
