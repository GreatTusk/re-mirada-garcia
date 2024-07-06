import { Metadata } from "next";
import Breadcrumbs from "@/app/ui/admin/pedidos/breadcrumbs";
import { ProductoCreateForm } from "@/app/ui/admin/productos/create-form";

export const metadata: Metadata = {
  title: "Crear producto",
};

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Productos", href: "/admin/dashboard/productos" },
          {
            label: "Crear producto",
            href: `/admin/dashboard/productos/create`,
            active: true,
          },
        ]}
      />
      <ProductoCreateForm />
    </main>
  );
}
