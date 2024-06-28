"use client";
import { useCarritoContext } from "@/app/contexts/carrito_context";
import { ProductoCarrito } from "@/app/lib/definitions";
import { Suspense } from "react";
import { ProductoCarritoSkeleton } from "@/app/ui/skeletons";
import CarritoProducto from "@/app/ui/carrito-compras/producto-carrito";
import OtrosProductos from "@/app/ui/carrito-compras/otros-productos";
import ResumenPedido from "@/app/ui/carrito-compras/resumen-pedido";
import CodDescuento from "@/app/ui/carrito-compras/cod-descuento";

/*
 * Es imposible acceder a esta página si no se está autenticado,
 * por lo que se puede asumir que el usuario es válido
 */

export default function Page() {
  return <CarritoCompras />;
}
function CarritoCompras() {
  // Sacar el carrito que tenga el id del usuario

  function ProductosCarrito() {
    const { carrito, setCarrito } = useCarritoContext();
    return (
      <div className="space-y-6">
        {carrito.carrito_producto.map((producto: ProductoCarrito) => (
          <Suspense key={producto.id} fallback={<ProductoCarritoSkeleton />}>
            {/*This is a client component because it requires interactivity*/}
            <CarritoProducto producto={producto} />
          </Suspense>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-white py-16 antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/*<h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">*/}
        {/*  Hola {usuario.nombre}, de ID {usuario.id} y correo {usuario.email}.*/}
        {/*  Este es su carrito de compras*/}
        {/*</h2>*/}
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 pb-16">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {/* Aqui se van a mostrar los productos del carrito*/}
            <ProductosCarrito />
            <OtrosProductos />
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            {/* Aqui se va a mostrar el resumen del pedido
            No necesita ser un componente de cliente ya que no habrá interactividad*/}
            <ResumenPedido />
            <CodDescuento />
          </div>
        </div>
      </div>
    </section>
  );
}
export const dynamic = "force-dynamic";
