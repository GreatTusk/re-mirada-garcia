"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import FormularioContacto from "@/app/ui/tienda/formulario-contacto";
import { MensajeExito } from "@/app/ui/tienda/mensaje-exito";

export function ContactoVentas() {
  const [openFormModal, setFormModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  function onCloseModal() {
    setFormModal(false);
  }

  return (
    <>
      <Button
        outline
        gradientDuoTone="cyanToBlue"
        onClick={() => setFormModal(true)}
      >
        Contacto ventas
      </Button>
      <MensajeExito
        openModal={openSuccessModal}
        setOpenModal={setOpenSuccessModal}
      />
      <Modal show={openFormModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Formulario de contacto
            </h3>
            <FormularioContacto
              setOpenFormModal={setFormModal}
              setOpenSuccessModal={setOpenSuccessModal}
            />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
