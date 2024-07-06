import DetallePedido from "@/app/ui/tracking/detalle-pedido";
import {
  fetchDetallePedidoConfirmado,
  fetchPedidoHistorico,
} from "@/app/lib/db";

export default async function Page({
  params,
}: {
  params: { idPedido: string };
}) {
  const idPedido = params.idPedido;

  const [detallePedido, pedidoHistorico] = await Promise.all([
    fetchDetallePedidoConfirmado(idPedido),
    fetchPedidoHistorico(idPedido),
  ]);
  return (
    <DetallePedido
      productosPedido={detallePedido}
      pedidoHistorico={pedidoHistorico}
    />
  );
}
