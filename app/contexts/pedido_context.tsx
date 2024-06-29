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
  pedido: Pedido;
  setPedido: Dispatch<SetStateAction<Pedido>>;
};

export const ContextoPedido = createContext<PedidoContextType | null>(null);

export default function ContextoPedidoProvider({
  children,
  pedidoInicial,
}: {
  children: ReactNode;
  pedidoInicial: Pedido;
}) {
  const [pedido, setPedido] = useState<Pedido>(pedidoInicial);
  return (
    <ContextoPedido.Provider value={{ pedido, setPedido }}>
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
