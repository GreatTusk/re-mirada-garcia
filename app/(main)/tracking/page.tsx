import HistorialPedidos from "@/app/ui/tracking/historial-pedidos";
import { currentUser } from "@clerk/nextjs/server";
import assert from "node:assert";
import {
  fetchDetallePedidoConfirmado,
  fetchPedidoHistorico,
  fetchPedidosConfirmados,
} from "@/app/lib/db";
import { PedidoConfirmado } from "@/app/lib/definitions";

export default async function Page() {
  const user = await currentUser();
  const userId = user?.id;
  assert(userId, "No hay usuario");
  const pedidosConfirmados: PedidoConfirmado[] =
    await fetchPedidosConfirmados(userId);
  return (
    <div className="mx-auto max-w-screen-xl py-16 lg:px-6">
      <HistorialPedidos pedidosConfirmados={pedidosConfirmados} />
    </div>
  );
}
export const dynamic = "force-dynamic";
