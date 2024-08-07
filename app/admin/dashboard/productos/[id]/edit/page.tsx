import { notFound } from "next/navigation";
import { Metadata } from "next";

import { fetchProductoServicioById } from "@/app/admin/lib/db";
import Breadcrumbs from "@/app/ui/admin/pedidos/breadcrumbs";
import ProductoEditForm from "@/app/ui/admin/productos/edit-form";

export const metadata: Metadata = {
  title: "Editar producto",
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const producto = await fetchProductoServicioById(id);
  if (!producto) {
    notFound();
  }
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Productos", href: "/admin/dashboard/productos" },
          {
            label: "Editar producto",
            href: `/admin/dashboard/producto/${id}/edit`,
            active: true,
          },
        ]}
      />
      <ProductoEditForm producto={producto} />
    </main>
  );
}
