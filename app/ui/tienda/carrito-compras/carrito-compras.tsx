import ProductosCarro from "@/app/ui/tienda/carrito-compras/productos-carro";
import ResumenPedido from "@/app/ui/tienda/carrito-compras/resumen-pedido";
import CodDescuento from "@/app/ui/tienda/carrito-compras/cod-descuento";
import { Carrito, Producto, ProductoCarrito, Usuario } from "@/app/lib/definitions"; // Como se van a hacer queries, se necesita usar async y await

async function fetchCarritoProductos(userId: string) {
  const response = await fetch(
    `${process.env.BACKEND_URL}/api/get_carrito_productos/?carrito=${userId}&format=json`,
  );
  return await response.json();
}

// Como se van a hacer queries, se necesita usar async y await
export default async function CarritoCompras({
  usuario,
}: {
  usuario: Usuario;
}) {
  // La idea es sacar al usuario de la sesión
  // Algo como const usuario = getUserSession();

  // Sacar el carrito que tenga el id del usuario
  // const carrito = fetchCarrito(usuario);
  const carrito: ProductoCarrito[] = await fetchCarritoProductos(usuario.id);
  console.log(carrito)

  return (
    <section className="bg-white py-16 antialiased dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        {/*<h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">*/}
        {/*  Hola {usuario.nombre}, de ID {usuario.id} y correo {usuario.email}.*/}
        {/*  Este es su carrito de compras*/}
        {/*</h2>*/}
        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 pb-16">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <ProductosCarro productos={carrito} />
          </div>
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <ResumenPedido productos={carrito} />
            <CodDescuento />
          </div>
        </div>
      </div>
    </section>
  );
}
