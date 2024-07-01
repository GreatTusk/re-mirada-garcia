export default async function Page() {
  return <></>;
}
// import { notFound } from 'next/navigation';
// import { Metadata } from 'next';
// import Breadcrumbs from "@/app/ui/admin/invoices/breadcrumbs";
// import ProductoForm from "@/app/ui/admin/invoices/create-form";
// import {fetchProductoById} from "@/app/admin/lib/data";
//
// export const metadata: Metadata = {
//   title: 'Edit invoice',
// };
//
// export default async function Page({ params }: { params: { id: string } }) {
//   const id = params.id;
//   const producto = await fetchProductoById(id);
//
//   if (!producto) {
//     notFound();
//   }
//
//   return (
//     <main>
//       <Breadcrumbs
//         breadcrumbs={[
//           { label: "Invoices", href: "/dashboard/invoices" },
//           {
//             label: "Edit Invoice",
//             href: `/dashboard/invoices/${id}/edit`,
//             active: true,
//           },
//         ]}
//       />
//       <ProductoForm invoice={producto =} customers={customers} />
//     </main>
//   );
// }
