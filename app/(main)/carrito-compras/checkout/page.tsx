import ContextoPedidoProvider from "@/app/contexts/pedido_context";
import OrderSummary from "@/app/ui/carrito-compras/checkout/order-summary";
import { fetchPedido } from "@/app/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import assert from "node:assert";

export default async function Page() {
  const user = await currentUser();
  assert(user, "No hay usuario");
  const pedidoInicial = await fetchPedido(user?.id);
  return (
    <ContextoPedidoProvider pedidoInicial={pedidoInicial}>
      <OrderSummary />
    </ContextoPedidoProvider>
  );
}
