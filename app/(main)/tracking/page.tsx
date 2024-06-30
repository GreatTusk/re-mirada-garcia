import OrderTracking from "@/app/ui/tracking/order-tracking";
import HistorialPedidos from "@/app/ui/tracking/historial-pedidos";
import { currentUser } from "@clerk/nextjs/server";
import assert from "node:assert";
import { fetchPedidosConfirmados } from "@/app/lib/db";

export default async function Page() {
  const user = await currentUser();
  const userId = user?.id;
  assert(userId, "No hay usuario");
  const pedidosConfirmados = await fetchPedidosConfirmados(userId);
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 lg:px-6">
      <HistorialPedidos pedidosConfirmados={pedidosConfirmados} />
    </div>
  );
}
