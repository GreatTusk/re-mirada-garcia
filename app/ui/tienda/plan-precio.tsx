import { PlanFoto, Usuario } from "@/app/lib/definitions";
import { Button, Card } from "flowbite-react";
import { ContactoVentas } from "@/app/ui/tienda/contacto";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import ComprarBoton from "./comprar-boton";
import { formatPriceWithSeparator } from "@/app/lib/util_server";

export async function PlanPrecio({ planFoto }: { planFoto: PlanFoto }) {
  const user = await currentUser();
  const user_id = user?.id;

  return (
    <Card className="max-w-sm">
      <h5 className="mb-4 text-2xl font-medium text-gray-500 dark:text-gray-400">
        {planFoto.titulo}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {formatPriceWithSeparator(planFoto.precio)}
        </span>
        <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400 truncate max-w-[120px] md:max-w-[none]">
          /evento
        </span>
      </div>
      <ul className="my-7 space-y-5 ">
        {planFoto.incluye.servicios.map((servicio) => (
          <li className="flex space-x-3" key={servicio}>
            <svg
              className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {servicio}
            </span>
          </li>
        ))}

        {planFoto.noIncluye.servicios.map((servicio) => (
          <li
            className="flex space-x-3 line-through decoration-gray-500"
            key={servicio}
          >
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {servicio}
            </span>
          </li>
        ))}
      </ul>
      <ContactoVentas />
      <ComprarBoton user_id={user_id} producto_id={planFoto.id}/>
    </Card>
  );
}

export async function addToCart(producto_id: number, user_id: string | undefined) {

  if (user_id !== null) {
    const producto_carrito = {
      carrito: user_id,
      producto: producto_id,
      cantidad: 1,
    };

    const response = await fetch(
      `${process.env.BACKEND_URL}/api/get_carrito_productos/?format=json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(producto_carrito),
      },
    );
    if (response.status !== 201) {
      return;
    }
    return await response.json();
  }
}