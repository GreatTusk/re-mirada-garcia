"use client";

import ModalBorrar from "@/app/ui/carrito-compras/modal-borrar";
import { useState } from "react";
import { deletePedidoHistorico } from "@/app/lib/db";
import { useRouter } from "next/navigation";

export default function BotonCancelar({ idPedido }: { idPedido: string }) {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const router = useRouter();
  async function handleDelete() {
    await deletePedidoHistorico(idPedido);
    router.push("/tracking");
  }
  return (
    <>
      <ModalBorrar
        openConfirmation={openConfirmation}
        setOpenConfirmation={setOpenConfirmation}
        handleDelete={handleDelete}
        message={"¿Estás seguro de que deseas cancelar este pedido?"}
      />
      <button
        onClick={() => setOpenConfirmation(true)}
        type="button"
        className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Cancelar servicio
      </button>
    </>
  );
}
