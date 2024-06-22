"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { Pedido } from "@/app/lib/definitions";

type PedidoContextType = {
  carrito: Pedido;
  setPedido: Dispatch<SetStateAction<Pedido>>;
};

export const ContextoPedido = createContext<PedidoContextType | null>(null);

export default function ContextoPedidoProvider({
  children,
  carritoInicial,
}: {
  children: ReactNode;
  carritoInicial: Pedido;
}) {
  const [carrito, setPedido] = useState<Pedido>(carritoInicial);
  return (
    <ContextoPedido.Provider value={{ carrito, setPedido }}>
      {children}
    </ContextoPedido.Provider>
  );
}

export function usePedidoContext() {
  const context = useContext(ContextoPedido);
  if (!context) {
    throw new Error(
      "usePedidoContext debe ser usado dentro de un ContextoPedidoProvider",
    );
  }
  return context;
}
