import { PedidoConfirmado } from "@/app/lib/definitions";
import Link from "next/link";
import { formatPriceWithSeparator } from "@/app/lib/util_server";
import BotonCancelar from "@/app/ui/tracking/boton-cancelar";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { FolderOpenIcon } from "@heroicons/react/16/solid";
import { HiOutlineDocumentRemove } from "react-icons/hi";

export default function HistorialPedidos({
  pedidosConfirmados,
}: {
  pedidosConfirmados: PedidoConfirmado[];
}) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 pb-96">
      <div className="mx-auto max-w-5xl">
        <div className="gap-4 sm:flex sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Mis servicios
          </h2>

          <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
            <div>
              {/*<label*/}
              {/*  htmlFor="order-type"*/}
              {/*  className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"*/}
              {/*>*/}
              {/*  Select order type*/}
              {/*</label>*/}
              <div
                id="order-type"
                className="block w-full min-w-[8rem] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              >
                Todos los servicios
              </div>
            </div>

            {/*<span className="inline-block text-gray-500 dark:text-gray-400">*/}
            {/*  {" "}*/}
            {/*  from{" "}*/}
            {/*</span>*/}

            {/*<div>*/}
            {/*  <label*/}
            {/*    htmlFor="duration"*/}
            {/*    className="sr-only mb-2 block text-sm font-medium text-gray-900 dark:text-white"*/}
            {/*  >*/}
            {/*    Select duration*/}
            {/*  </label>*/}
            {/*  <select*/}
            {/*    id="duration"*/}
            {/*    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"*/}
            {/*  >*/}
            {/*    <option selected>this week</option>*/}
            {/*    <option value="this month">this month</option>*/}
            {/*    <option value="last 3 months">the last 3 months</option>*/}
            {/*    <option value="lats 6 months">the last 6 months</option>*/}
            {/*    <option value="this year">this year</option>*/}
            {/*  </select>*/}
          </div>
        </div>
      </div>

      <div className="mt-6 flow-root sm:mt-8">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {pedidosConfirmados.length !== 0 ? (
            pedidosConfirmados.map((pedido) => (
              <div
                className="flex flex-wrap items-center gap-y-4 py-6"
                key={pedido.id_pedido}
              >
                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                    Order ID:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white max-w-xs truncate">
                    <a href="#" className="hover:underline">
                      #{pedido.id_pedido}
                    </a>
                  </dd>
                </dl>

                <dl className=" w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                    Date:
                  </dt>
                  <dd className=" mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                    {pedido.fecha_creacion.substring(0, 10)}
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                    Price:
                  </dt>
                  <dd className="mt-1.5 text-base font-semibold text-gray-900 dark:text-white">
                    ${formatPriceWithSeparator(pedido.total)}
                  </dd>
                </dl>

                <dl className="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                  <dt className="text-base font-medium text-gray-500 dark:text-gray-400">
                    Estado:
                  </dt>
                  <dd className="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                    <svg
                      className="me-1 h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 11.917 9.724 16.5 19 7.5"
                      />
                    </svg>
                    Confirmado
                  </dd>
                </dl>

                <div className="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4">
                  <BotonCancelar
                    idPedido={pedido.id_pedido}
                    buttonClassName={
                      "w-full rounded-lg border border-red-700 px-3 py-2 text-center text-sm font-medium text-red-700 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 lg:w-auto"
                    }
                  />
                  <Link
                    href={`/tracking/${pedido.id_pedido}`}
                    className="w-full inline-flex justify-center rounded-lg  border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center space-y-2 pt-12">
              <HiOutlineDocumentRemove className="h-12 w-12 text-gray-400" />
              <p className="text-gray-600 dark:text-white">
                No ha contratado ningún servicio
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
