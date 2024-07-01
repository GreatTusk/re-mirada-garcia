import { lusitana } from "@/app/ui/admin/fonts";
import { Suspense } from "react";
import { ProductosTablaSkeleton } from "@/app/ui/admin/skeletons";
import TablaProductos from "@/app/ui/admin/productos/table";

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Productos</h1>
      </div>

      <Suspense fallback={<ProductosTablaSkeleton />}>
        <TablaProductos />
      </Suspense>
    </div>
  );
}
