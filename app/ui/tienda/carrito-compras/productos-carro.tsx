import Image from "next/image";
import { Producto, ProductoCarrito } from "@/app/lib/definitions";

export default function ProductosCarro({
  productos,
}: {
  productos: ProductoCarrito[];
}) {
  return (
    <div className="space-y-6">
      {productos.map((producto) => (
        <div
          key={producto.producto.id}
          className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6"
        >
          <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
            <a href="#" className="shrink-0 md:order-1">
              <Image
                className="h-20 w-20 rounded-2xl"
                src={producto.producto.imagenUrl}
                alt={producto.producto.nombre}
                width={1922}
                height={1082}
              />
              {/*<Image*/}
              {/*  className="h-20 w-20 dark:hidden"*/}
              {/*  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"*/}
              {/*  alt="imac image"*/}
              {/*  width={1922}*/}
              {/*  height={1082}*/}
              {/*/>*/}
              {/*<Image*/}
              {/*  className="hidden h-20 w-20 dark:block"*/}
              {/*  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"*/}
              {/*  alt="imac image"*/}
              {/*  width={1922}*/}
              {/*  height={1082}*/}
              {/*/>*/}
            </a>

            {/* Counter input */}
            <label htmlFor="counter-input" className="sr-only">
              Elija la cantidad de productos:
            </label>

            <div className="flex items-center justify-between md:order-3 md:justify-end">
              <div className="flex items-center">
                {/*Boton decrementar*/}
                <button
                  type="button"
                  id="decrement-button"
                  data-input-counter-decrement="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h16"
                    />
                  </svg>
                </button>

                {/* Cantidad */}
                <input
                  type="text"
                  id="counter-input"
                  data-input-counter=""
                  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                  placeholder=""
                  value={producto.cantidad}
                  required
                />
                {/*Boton incrementar*/}
                <button
                  type="button"
                  id="increment-button"
                  data-input-counter-increment="counter-input"
                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 1v16M1 9h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Precio */}
              <div className="text-end md:order-4 md:w-32">
                <p className="text-base font-bold text-gray-900 dark:text-white">
                  ${producto.producto.precio}
                </p>
              </div>
            </div>
            {/* Descripción */}
            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:underline dark:text-white"
              >
                {producto.producto.nombre}
              </a>
              {/* Botones favorito y remover */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
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
                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                    />
                  </svg>
                  Añadir a favoritos
                </button>

                <button
                  type="button"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                >
                  <svg
                    className="me-1.5 h-5 w-5"
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
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
