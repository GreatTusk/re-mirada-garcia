import { PedidoTabla } from "@/app/lib/definitions";

import { AiOutlineUser } from "react-icons/ai";
import { fetchAllPedidos } from "@/app/admin/lib/db";
import { formatDateToLocal } from "@/app/admin/lib/utils";
import { ViewPedido } from "@/app/ui/admin/pedidos/buttons";

export default async function TablaPedidos() {
  const pedidos: PedidoTabla[] = await fetchAllPedidos();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {pedidos?.map((pedido) => (
              <div
                key={pedido.pedido.id_pedido}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{pedido.pedido.id_pedido}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <AiOutlineUser />
                      <p>{pedido.pedido.first_name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{pedido.pedido.last_name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{pedido.pedido.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{pedido.pedido.fecha_creacion}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{pedido.pedido.total}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ID Pedido
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Apellido
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha creación
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Total
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {pedidos.map((pedido) => (
                <tr
                  key={pedido.pedido.id_pedido}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    {pedido.pedido.id_pedido}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pedido.pedido.first_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pedido.pedido.last_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pedido.pedido.email}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(pedido.pedido.fecha_creacion)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {pedido.pedido.total}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewPedido id_pedido={pedido.pedido.id_pedido} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
