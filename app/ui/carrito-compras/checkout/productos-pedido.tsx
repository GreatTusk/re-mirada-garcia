import Link from "next/link";
import Image from "next/image";
import { formatPriceWithSeparator } from "@/app/lib/util";
import { Carrito, ProductoCarrito } from "@/app/lib/definitions";

export default function ProductosPedido({ carrito }: { carrito: Carrito }) {
  return (
    /*Items del carrito*/
    <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
      <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {carrito.carrito_producto.map((carrito) => (
            <tr key={carrito.id}>
              <td className="whitespace-nowrap py-4 md:w-[384px]">
                <div className="flex items-center gap-4">
                  <Link
                    href="/tienda"
                    className="flex items-center aspect-square w-10 h-10 shrink-0"
                  >
                    <Image
                      className="h-auto w-full max-h-full dark:hidden"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      alt="imac image"
                      width="2012"
                      height="1695"
                    />
                    <Image
                      className="hidden h-auto w-full max-h-full dark:block"
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                      alt="imac image"
                      width="2012"
                      height="1695"
                    />
                  </Link>
                  <a href="#" className="hover:underline">
                    {carrito.producto_carrito.nombre}
                  </a>
                </div>
              </td>

              <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                x{carrito.cantidad}
              </td>

              <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                ${formatPriceWithSeparator(carrito.producto_carrito.precio)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
