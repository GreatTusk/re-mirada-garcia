"use client";

import { useCarritoContext } from "@/app/contexts/carrito_context";
import { useEffect, useState } from "react";
import { Region } from "@/app/lib/definitions";
import InfoFacturacionModal from "@/app/ui/carrito-compras/checkout/info-facturacion-modal";
import ProductosPedido from "@/app/ui/carrito-compras/checkout/productos-pedido";
import ResumenPedido from "@/app/ui/carrito-compras/checkout/resumen-pedido";
import { usePedidoContext } from "@/app/contexts/pedido_context";

export default function OrderSummary() {
  const { carrito, setCarrito } = useCarritoContext();
  const { pedido, setPedido } = usePedidoContext();
  const [openModal, setOpenModal] = useState(false);
  const [comunasRegiones, setComunasRegiones] = useState<Region[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://gist.githubusercontent.com/juanbrujo/0fd2f4d126b3ce5a95a7dd1f28b3d8dd/raw/b8575eb82dce974fd2647f46819a7568278396bd/comunas-regiones.json",
      );
      const data = await res.json();
      setComunasRegiones(data.regiones);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Resumen del pedido
          </h2>
          <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Información de facturación
            </h4>
            <dl>
              <dt className="text-base font-medium text-gray-900 dark:text-white">
                Cliente
              </dt>
              <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                {`${pedido.first_name} ${pedido.last_name == null ? "" : pedido.last_name} - ${pedido.phone_number == "" ? "número de teléfono no encontrado" : pedido.phone_number} - ${pedido.email}`}
              </dd>
            </dl>
            <button
              type={"button"}
              className="text-base font-medium text-primary-700 hover:underline dark:text-primary-500"
              onClick={async () => {
                setOpenModal(true);
              }}
            >
              Editar
            </button>
          </div>
          <InfoFacturacionModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            comunasRegiones={comunasRegiones}
            loading={loading}
            pedido={pedido}
            setPedido={setPedido}
          />
          <div className="mt-6 sm:mt-8">
            {/*Items del carrito*/}
            <ProductosPedido carrito={carrito} />
            <ResumenPedido carrito={carrito} />
          </div>
        </div>
      </form>
    </section>
  );
}
