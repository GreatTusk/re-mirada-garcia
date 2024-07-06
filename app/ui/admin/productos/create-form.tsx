"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/app/ui/admin/button";
import {
  createProductoServicio,
  ProductoServicioState,
} from "@/app/admin/lib/actions";
import { useRouter } from "next/navigation";

export function ProductoCreateForm() {
  const [state, setState] = useState<ProductoServicioState>({
    errors: {},
    message: undefined,
  });
  const [incluye, setIncluye] = useState<string[]>([]);
  const [noIncluye, setNoIncluye] = useState<string[]>([]);
  const router = useRouter();

  const handleIncluyeChange = (index: number, value: string) => {
    const updated = [...incluye];
    updated[index] = value;
    setIncluye(updated);
  };

  const handleNoIncluyeChange = (index: number, value: string) => {
    const updated = [...noIncluye];
    updated[index] = value;
    setNoIncluye(updated);
  };

  const addIncluye = () => {
    setIncluye([...incluye, ""]);
    setState({
      ...state,
      errors: {
        ...state.errors,
        incluye: undefined,
      },
    });
  };
  const removeIncluye = (index: number) =>
    setIncluye(incluye.filter((_, i) => i !== index));

  const addNoIncluye = () => setNoIncluye([...noIncluye, ""]);
  const removeNoIncluye = (index: number) =>
    setNoIncluye(noIncluye.filter((_, i) => i !== index));

  return (
    <form
      action={async (formData) => {
        const res = await createProductoServicio(
          state,
          formData,
          incluye,
          noIncluye,
        );
        if (res.message === "S") {
          router.push("/admin/dashboard/productos");
        }
        setState(res);
      }}
    >
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="nombre" className="mb-2 block text-sm font-medium">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre del producto"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            onClick={() =>
              setState({
                ...state,
                errors: {
                  ...state.errors,
                  nombre: undefined,
                },
              })
            }
          />
          {state.errors?.nombre && (
            <div className="mt-2 text-sm text-red-600">
              <span>¡Uy!</span> {state.errors?.nombre}
            </div>
          )}
        </div>

        {/* Product Image URL */}
        <div className="mb-4">
          <label
            htmlFor="imagen_url"
            className="mb-2 block text-sm font-medium"
          >
            Imagen
          </label>
          <input
            id="imagen_url"
            name="imagen_url"
            type="text"
            placeholder="Ingrese la URL de la imagen"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            onClick={() =>
              setState({
                ...state,
                errors: {
                  ...state.errors,
                  imagen_url: undefined,
                },
              })
            }
          />
          {state.errors?.imagen_url && (
            <div className="mt-2 text-sm text-red-600">
              <span>¡Uy!</span> {state.errors?.imagen_url}
            </div>
          )}
        </div>
        {/* Product Price */}
        <div className="mb-4">
          <label htmlFor="precio" className="mb-2 block text-sm font-medium">
            Precio
          </label>
          <input
            id="precio"
            name="precio"
            type="number"
            step="0.01"
            placeholder="Ingrese el precio"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            onClick={() =>
              setState({
                ...state,
                errors: {
                  ...state.errors,
                  precio: undefined,
                },
              })
            }
          />
          {state.errors?.precio && (
            <div className="mt-2 text-sm text-red-600">
              <span>¡Uy!</span> {state.errors?.precio}
            </div>
          )}
        </div>

        {/* Product Offer Price (Optional) */}
        <div className="mb-4">
          <label
            htmlFor="precio_oferta"
            className="mb-2 block text-sm font-medium"
          >
            Precio de oferta (Opcional)
          </label>
          <input
            id="precio_oferta"
            name="precio_oferta"
            type="number"
            step="0.01"
            placeholder="Ingrese el precio de oferta"
            className="block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm outline-2 placeholder:text-gray-500"
            onClick={() =>
              setState({
                ...state,
                errors: {
                  ...state.errors,
                  precio_oferta: undefined,
                },
              })
            }
          />
          {state.errors?.precio_oferta && (
            <div className="mt-2 text-sm text-red-600">
              <span>¡Uy!</span> {state.errors?.precio_oferta}
            </div>
          )}
        </div>
        {/* Incluye fields */}
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">Incluye</h4>
          {incluye.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleIncluyeChange(index, e.target.value)}
                className="flex-1 rounded-md border border-gray-300 p-2 text-sm shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={"Ingrese el servicio"}
              />
              <button
                type="button"
                onClick={() => removeIncluye(index)}
                className="rounded-md bg-red-500 p-2 text-sm text-white hover:bg-red-600"
              >
                Quitar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIncluye}
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            Añadir servicio
          </button>

          {state.errors?.incluye && (
            <div className="mt-2 text-sm text-red-600">
              <span>¡Uy!</span> {state.errors?.incluye}
            </div>
          )}
        </div>

        {/* No Incluye fields */}
        <div className="mb-6">
          <h4 className="mb-2 text-lg font-semibold">No Incluye</h4>
          {noIncluye.map((item, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleNoIncluyeChange(index, e.target.value)}
                className="flex-1 rounded-md border border-gray-300 p-2 text-sm shadow-sm placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                placeholder={"Ingrese el servicio que no se incluye"}
              />
              <button
                type="button"
                onClick={() => removeNoIncluye(index)}
                className="rounded-md bg-red-500 p-2 text-sm text-white hover:bg-red-600"
              >
                Quitar
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addNoIncluye}
            className="rounded-md bg-blue-500 px-4 py-2 text-sm text-white hover:bg-blue-600"
          >
            Añadir servicio no incluido
          </button>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/admin/dashboard/productos"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <Button type="submit">Crear Producto</Button>
      </div>
    </form>
  );
}
