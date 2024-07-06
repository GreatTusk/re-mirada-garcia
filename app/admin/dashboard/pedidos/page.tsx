import TablaPedidos from "@/app/ui/admin/pedidos/table";
import { lusitana } from "@/app/ui/admin/fonts";

import { Suspense } from "react";
import { PedidosTablaSkeleton } from "@/app/ui/admin/skeletons";

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Pedidos</h1>
      </div>
      <Suspense fallback={<PedidosTablaSkeleton />}>
        <TablaPedidos />
      </Suspense>
    </div>
  );
}
