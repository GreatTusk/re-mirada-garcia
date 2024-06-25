"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Carrito, ProductoCarrito } from "@/app/lib/definitions";

type CarritoContextType = {
  carrito: Carrito;
  setCarrito: Dispatch<SetStateAction<Carrito>>;
};

export const ContextoCarrito = createContext<CarritoContextType | null>(null);

export default function ContextoCarritoProvider({
  children,
  carritoInicial,
}: {
  children: ReactNode;
  carritoInicial: Carrito;
}) {
  const [carrito, setCarrito] = useState<Carrito>(carritoInicial);
  return (
    <ContextoCarrito.Provider value={{ carrito, setCarrito }}>
      {children}
    </ContextoCarrito.Provider>
  );
}

export function useCarritoContext() {
  const context = useContext(ContextoCarrito);
  if (!context) {
    throw new Error(
      "useCarritoContext debe ser usado dentro de un ContextoCarritoProvider",
    );
  }
  return context;
}
