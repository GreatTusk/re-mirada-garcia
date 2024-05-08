"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FormularioContacto from "@/app/ui/tienda/formulario-contacto";

export function ContactoVentas() {
  const [openModal, setOpenModal] = useState(false);

  function onCloseModal() {
    setOpenModal(false);
  }
  return (
    <>
      <Button
        outline
        gradientDuoTone="cyanToBlue"
        onClick={() => setOpenModal(true)}
      >
        Contacto ventas
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Formulario de contacto
            </h3>
            <FormularioContacto setOpenModal={setOpenModal} />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
