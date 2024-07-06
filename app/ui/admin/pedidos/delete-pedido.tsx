"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import ModalBorrar from "@/app/ui/carrito-compras/modal-borrar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function DeletePedido({ id }: { id: string }) {
  const router = useRouter();
  async function deleteProducto() {
    await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pedidohistorico/${id}/?format=json`,
      {
        method: "DELETE",
      },
    );
    router.refresh();
  }
  const [openConfirmation, setOpenConfirmation] = useState(false);
  return (
    <>
      <ModalBorrar
        openConfirmation={openConfirmation}
        setOpenConfirmation={setOpenConfirmation}
        handleDelete={deleteProducto}
        message={"¿Estás seguro de que deseas borrar este producto?"}
      />
      <button
        className="rounded-md border p-2 hover:bg-gray-100"
        onClick={() => setOpenConfirmation(true)}
      >
        <span className="sr-only">Borrar</span>
        <TrashIcon className="w-5" />
      </button>
    </>
  );
}
