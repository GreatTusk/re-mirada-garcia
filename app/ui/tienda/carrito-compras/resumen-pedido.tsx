import { ProductoCarrito } from "@/app/lib/definitions";
import Link from "next/link";
import { formatPriceWithSeparator } from "@/app/lib/util_server";

export default function ResumenPedido({
  productos,
}: {
  productos: ProductoCarrito[];
}) {
  const precioTotal = productos.reduce((a, b) => a + b.producto_carrito.precio, 0);
  const ahorros = productos.reduce(
    (a, b) => a + (b.producto_carrito.precio - (b.producto_carrito.precio_oferta || 0)),
    0,
  );

  return (
    <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 dark:text-white">
        Resumen del pedido
      </p>
      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
              Precio original
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${formatPriceWithSeparator(precioTotal)}
            </dd>
          </dl>
          {ahorros > 0 && (
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                Ahorros
              </dt>
              <dd className="text-base font-medium text-green-600">
                -${formatPriceWithSeparator(ahorros)}
              </dd>
            </dl>
          )}
        </div>
        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 dark:text-white">
            ${formatPriceWithSeparator(precioTotal - ahorros)}
          </dd>
        </dl>
      </div>

      <Link
        href="/tienda/checkout"
        className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Continuar a la compra
      </Link>

      <div className="flex items-center justify-center gap-2">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {" "}
          o{" "}
        </span>
        <Link
          href="/tienda"
          title=""
          className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
        >
          Continuar comprando
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
