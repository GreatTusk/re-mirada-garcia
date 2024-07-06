import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

import { lusitana } from "@/app/ui/admin/fonts";
import { fetchPedidoHistorico } from "@/app/admin/lib/db";
import { PedidoConfirmado } from "@/app/lib/definitions";
import { AiOutlineUser } from "react-icons/ai";
import { formatPriceWithSeparator } from "@/app/lib/util_server";

export default async function LatestInvoices() {
  // Remove props
  const latestInvoices: PedidoConfirmado[] = await fetchPedidoHistorico();

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Últimas facturas
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}
        {
          <div className="bg-white px-6">
            {latestInvoices.map((invoice, i) => {
              return (
                <div
                  key={invoice.id_pedido}
                  className={clsx(
                    "flex flex-row items-center justify-between py-4",
                    {
                      "border-t": i !== 0,
                    },
                  )}
                >
                  <div className="flex items-center">
                    <AiOutlineUser className="mr-2 text-gray-500" />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold md:text-base">
                        {invoice.first_name}
                      </p>
                      <p className="hidden text-sm text-gray-500 sm:block">
                        {invoice.email}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {`$${formatPriceWithSeparator(invoice.total)}`}
                  </p>
                </div>
              );
            })}
          </div>
        }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Actualizado ahora</h3>
        </div>
      </div>
    </div>
  );
}
