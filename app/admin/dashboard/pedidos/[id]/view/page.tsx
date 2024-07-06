import { notFound } from "next/navigation";
import { Metadata } from "next";

import { fetchPedidoDetalle } from "@/app/admin/lib/db";
import Breadcrumbs from "@/app/ui/admin/pedidos/breadcrumbs";
import PedidoView from "@/app/ui/admin/pedidos/pedido-view";

export const metadata: Metadata = {
  title: "Editar pedido",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const producto = await fetchPedidoDetalle(id);
  if (!producto) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Pedidos", href: "/admin/dashboard/pedidos" },
          {
            label: `Pedido #${id}`,
            href: `/admin/dashboard/pedidos/${id}/view`,
            active: true,
          },
        ]}
      />
      {/*<ProductoEditForm producto={producto} />*/}
      <PedidoView pedidoTabla={producto} />
    </main>
  );
}
