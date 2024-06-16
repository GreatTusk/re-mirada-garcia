"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { ProductoCarrito } from "@/app/lib/definitions";

type CarritoContextType = {
  carrito: ProductoCarrito[];
  setCarrito: Dispatch<SetStateAction<ProductoCarrito[]>>;
};

export const ContextoCarrito = createContext<CarritoContextType | null>(null);

export default function ContextoCarritoProvider({
  children,
  carritoInicial,
}: {
  children: ReactNode;
  carritoInicial: ProductoCarrito[];
}) {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>(carritoInicial);
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
