import { ahorros, formatPriceWithSeparator, precioTotal } from "@/app/lib/util";
import Link from "next/link";
import { ProductoCarrito } from "@/app/lib/definitions";

export default function ResumenPedido({
  carrito,
}: {
  carrito: ProductoCarrito[];
}) {
  const precio_total = precioTotal(carrito);
  const ahorro = ahorros(carrito);
  return (
    <div className="mt-4 space-y-6">
      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
        Resumen del pedido
      </h4>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-gray-500 dark:text-gray-400">
              Precio original
            </dt>
            <dd className="text-base font-medium text-gray-900 dark:text-white">
              ${formatPriceWithSeparator(precio_total)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-gray-500 dark:text-gray-400">Ahorros</dt>
            <dd className="text-base font-medium text-green-500">
              -${formatPriceWithSeparator(ahorro)}
            </dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-lg font-bold text-gray-900 dark:text-white">
            Total
          </dt>
          <dd className="text-lg font-bold text-gray-900 dark:text-white">
            ${formatPriceWithSeparator(precio_total - ahorro)}
          </dd>
        </dl>
      </div>

      <div className="flex items-start sm:items-center">
        <input
          id="terms-checkbox-2"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
        />
        <label
          htmlFor="terms-checkbox-2"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {" "}
          Estoy de acuerdo con{" "}
          <Link
            href="/legal"
            title=""
            className="text-primary-700 underline hover:no-underline dark:text-primary-500"
          >
            los Términos y Condiciones
          </Link>{" "}
          de MiradaGarcia{" "}
        </label>
      </div>

      <div className="gap-4 sm:flex sm:items-center">
        <Link
          href={"/carrito-compras"}
          className="w-full rounded-lg text-center border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
        >
          Volver al carrito
        </Link>

        <Link
          type="submit"
          href={"/carrito-compras/pedido-confirmado"}
          className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary-700  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
        >
          Confirmar pedido
        </Link>
      </div>
    </div>
  );
}
