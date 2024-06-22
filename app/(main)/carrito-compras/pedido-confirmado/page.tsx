import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white antialiased dark:bg-gray-900 py-16 md:pb-48">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
          ¡Gracias por preferirnos!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
          Su pedido{" "}
          <a
            href="#"
            className="font-medium text-gray-900 dark:text-white hover:underline"
          >
            #7564804
          </a>{" "}
          ha sido recibido y será contactado dentro de 24 horas por nuestro
          equipo.
        </p>
        <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Fecha
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              14 May 2024
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Método de pago
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              JPMorgan monthly installments
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Nombre
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              Flowbite Studios LLC
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Dirección
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              34 Scott Street, San Francisco, California, USA
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Teléfono
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              +(123) 456 7890
            </dd>
          </dl>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            {/*Seguimiento*/}
            Volver al inicio
          </Link>
          <Link
            href="/carrito-compras"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Return to shopping
          </Link>
        </div>
      </div>
    </section>
  );
}
