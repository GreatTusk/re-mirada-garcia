"use client";

import ModalBorrar from "@/app/ui/carrito-compras/modal-borrar";
import { useState } from "react";
import { deletePedidoHistorico } from "@/app/lib/db";
import { useRouter } from "next/navigation";

export default function BotonCancelar({
  idPedido,
  buttonClassName,
}: {
  idPedido: string;
  buttonClassName: string;
}) {
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const router = useRouter();
  async function handleDelete() {
    console.log(await deletePedidoHistorico(idPedido));
    router.refresh();
  }
  return (
    <div>
      <ModalBorrar
        openConfirmation={openConfirmation}
        setOpenConfirmation={setOpenConfirmation}
        handleDelete={handleDelete}
        message={"¿Estás seguro de que deseas cancelar este pedido?"}
      />
      <button
        onClick={() => setOpenConfirmation(true)}
        type="button"
        className={buttonClassName}
      >
        Cancelar
      </button>
    </div>
  );
}
