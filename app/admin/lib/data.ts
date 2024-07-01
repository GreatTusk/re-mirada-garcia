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
