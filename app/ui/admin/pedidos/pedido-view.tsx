import React from "react";
import { PedidoTabla } from "@/app/lib/definitions";

const PedidoTablaForm = ({ pedidoTabla }: { pedidoTabla: PedidoTabla }) => {
  const { pedido, productos_pedido } = pedidoTabla;

  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Pedido Fields */}
        <div className="mb-4">
          <label htmlFor="id_pedido" className="mb-2 block text-sm font-medium">
            ID Pedido
          </label>
          <input
            id="id_pedido"
            name="id_pedido"
            type="text"
            defaultValue={pedido.id_pedido}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="usuario" className="mb-2 block text-sm font-medium">
            Usuario
          </label>
          <input
            id="usuario"
            name="usuario"
            type="text"
            defaultValue={pedido.usuario}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="mb-2 block text-sm font-medium">
            Dirección
          </label>
          <input
            id="direccion"
            name="direccion"
            type="text"
            defaultValue={pedido.direccion}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="region" className="mb-2 block text-sm font-medium">
            Región
          </label>
          <input
            id="region"
            name="region"
            type="text"
            defaultValue={pedido.region}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comuna" className="mb-2 block text-sm font-medium">
            Comuna
          </label>
          <input
            id="comuna"
            name="comuna"
            type="text"
            defaultValue={pedido.comuna}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="mb-2 block text-sm font-medium"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            defaultValue={pedido.descripcion}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fecha" className="mb-2 block text-sm font-medium">
            Fecha
          </label>
          <input
            id="fecha"
            name="fecha"
            type="text"
            defaultValue={pedido.fecha}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="metodo_pago"
            className="mb-2 block text-sm font-medium"
          >
            Método de Pago
          </label>
          <input
            id="metodo_pago"
            name="metodo_pago"
            type="text"
            defaultValue={pedido.metodo_pago}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        {pedido.nombre_empresa && (
          <div className="mb-4">
            <label
              htmlFor="nombre_empresa"
              className="mb-2 block text-sm font-medium"
            >
              Nombre de la Empresa
            </label>
            <input
              id="nombre_empresa"
              name="nombre_empresa"
              type="text"
              defaultValue={pedido.nombre_empresa}
              disabled
              className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
            />
          </div>
        )}
        {pedido.rut_empresa && (
          <div className="mb-4">
            <label
              htmlFor="rut_empresa"
              className="mb-2 block text-sm font-medium"
            >
              RUT de la Empresa
            </label>
            <input
              id="rut_empresa"
              name="rut_empresa"
              type="text"
              defaultValue={pedido.rut_empresa}
              disabled
              className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
            />
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="mb-2 block text-sm font-medium"
          >
            Nombre
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            defaultValue={pedido.first_name}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="last_name" className="mb-2 block text-sm font-medium">
            Apellido
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            defaultValue={pedido.last_name}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={pedido.email}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone_number"
            className="mb-2 block text-sm font-medium"
          >
            Teléfono
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="text"
            defaultValue={pedido.phone_number}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fecha_creacion"
            className="mb-2 block text-sm font-medium"
          >
            Fecha de Creación
          </label>
          <input
            id="fecha_creacion"
            name="fecha_creacion"
            type="text"
            defaultValue={pedido.fecha_creacion}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="total" className="mb-2 block text-sm font-medium">
            Total
          </label>
          <input
            id="total"
            name="total"
            type="number"
            defaultValue={pedido.total}
            disabled
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
          />
        </div>

        {/* Productos Pedido */}
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">Productos del Pedido</h4>
          {productos_pedido.map((producto, index) => (
            <div key={index} className="mb-4">
              <div className="mb-2">
                <label
                  htmlFor={`producto_${index}`}
                  className="mb-2 block text-sm font-medium"
                >
                  Producto
                </label>
                <input
                  id={`producto_${index}`}
                  name={`producto_${index}`}
                  type="text"
                  defaultValue={producto.producto.nombre}
                  disabled
                  className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor={`cantidad_${index}`}
                  className="mb-2 block text-sm font-medium"
                >
                  Cantidad
                </label>
                <input
                  id={`cantidad_${index}`}
                  name={`cantidad_${index}`}
                  type="number"
                  defaultValue={producto.cantidad}
                  disabled
                  className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor={`precio_total_${index}`}
                  className="mb-2 block text-sm font-medium"
                >
                  Precio Total
                </label>
                <input
                  id={`precio_total_${index}`}
                  name={`precio_total_${index}`}
                  type="number"
                  defaultValue={producto.precio_total}
                  disabled
                  className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default PedidoTablaForm;
