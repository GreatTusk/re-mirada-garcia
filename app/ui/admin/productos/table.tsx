import Image from "next/image";

import InvoiceStatus from "@/app/ui/admin/invoices/status";
import { formatCurrency, formatDateToLocal } from "@/app/admin/lib/utils";
import {
  DeleteProducto,
  UpdateProducto,
} from "@/app/ui/admin/invoices/buttons";
import { fetchProductos } from "@/app/lib/db";
import { Producto } from "@/app/lib/definitions";
import { formatPriceWithSeparator } from "@/app/lib/util_server";

export default async function TablaProductos() {
  const productos: Producto[] = await fetchProductos();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {productos?.map((producto) => (
              <div
                key={producto.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={producto.imagen_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${producto.nombre}'s profile picture`}
                      />
                      <p>{producto.nombre}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatPriceWithSeparator(producto.precio)}
                    </p>
                    <p>
                      {formatPriceWithSeparator(
                        producto.precio_oferta ? producto.precio_oferta : 0,
                      )}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateProducto id={producto.id} />
                    <DeleteProducto id={producto.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Nombre
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Precio
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Precio Oferta
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {productos?.map((producto) => (
                <tr
                  key={producto.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={producto.imagen_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${producto.nombre}'s profile picture`}
                      />
                      <p>{producto.nombre}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatPriceWithSeparator(producto.precio)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatPriceWithSeparator(
                      producto.precio_oferta ? producto.precio_oferta : 0,
                    )}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProducto id={producto.id} />
                      <DeleteProducto id={producto.id} />
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
