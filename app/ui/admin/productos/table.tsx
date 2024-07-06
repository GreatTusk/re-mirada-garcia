import Image from "next/image";

import { fetchProductosServicios } from "@/app/lib/db";
import { ProductoServicio } from "@/app/lib/definitions";
import { formatPriceWithSeparator } from "@/app/lib/util_server";
import { DeleteProducto } from "@/app/ui/admin/productos/delete-producto";
import { UpdateProducto } from "@/app/ui/admin/productos/buttons";

export default async function TablaProductos() {
  const productosServicios: ProductoServicio[] =
    await fetchProductosServicios();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {productosServicios?.map((productoServicio) => (
              <div
                key={productoServicio.producto.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={productoServicio.producto.imagen_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${productoServicio.producto.imagen_url}'s profile picture`}
                      />
                      <p>{productoServicio.producto.nombre}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatPriceWithSeparator(
                        productoServicio.producto.precio,
                      )}
                    </p>
                    <p>
                      {formatPriceWithSeparator(
                        productoServicio.producto.precio_oferta
                          ? productoServicio.producto.precio_oferta
                          : 0,
                      )}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateProducto id={productoServicio.producto.id} />
                    <DeleteProducto id={productoServicio.producto.id} />
                  </div>
                </div>
                {/* Incluye Section */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Incluye:</h3>
                  <ul className="list-disc pl-5">
                    {productoServicio.incluye.map((incluyeItem, index) => (
                      <li key={index}>{incluyeItem}</li>
                    ))}
                  </ul>
                </div>
                {/* No Incluye Section */}
                {productoServicio.no_incluye && (
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">No Incluye:</h3>
                    <ul className="list-disc pl-5">
                      {productoServicio.no_incluye.map(
                        (noIncluyeItem, index) => (
                          <li key={index}>{noIncluyeItem}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
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
                <th scope="col" className="px-3 py-5 font-medium">
                  Incluye
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  No Incluye
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {productosServicios?.map((productoServicio) => (
                <tr
                  key={productoServicio.producto.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={productoServicio.producto.imagen_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${productoServicio.producto.nombre}'s profile picture`}
                      />
                      <p>{productoServicio.producto.nombre}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatPriceWithSeparator(productoServicio.producto.precio)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatPriceWithSeparator(
                      productoServicio.producto.precio_oferta
                        ? productoServicio.producto.precio_oferta
                        : 0,
                    )}
                  </td>
                  {/* Incluye Section */}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="mt-4">
                      <ul className="list-disc pl-5">
                        {productoServicio.incluye.map((incluyeItem, index) => (
                          <li key={index}>{incluyeItem}</li>
                        ))}
                      </ul>
                    </div>
                  </td>
                  {/* No Incluye Section */}

                  {productoServicio.no_incluye ? (
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="mt-4">
                        <ul className="list-disc pl-5">
                          {productoServicio.no_incluye.map(
                            (noIncluyeItem, index) => (
                              <li key={index}>{noIncluyeItem}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    </td>
                  ) : (
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="mt-4">No aplica</div>
                    </td>
                  )}
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProducto id={productoServicio.producto.id} />
                      <DeleteProducto id={productoServicio.producto.id} />
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
