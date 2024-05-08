import ProductosCarro from "@/app/ui/tienda/carrito-compras/productos-carro";
import OtrosProductos from "@/app/ui/tienda/carrito-compras/otros-productos";
import ResumenPedido from "@/app/ui/tienda/carrito-compras/resumen-pedido";
import CodDescuento from "@/app/ui/tienda/carrito-compras/cod-descuento";

export default function CarritoCompras() {
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Carrito de compras
        </h2>
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <ProductosCarro />
            <OtrosProductos />
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <ResumenPedido />
            <CodDescuento />
          </div>
        </div>
      </div>
    </section>
  );
}
