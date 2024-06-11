"use client";
import { Button } from "flowbite-react";
import Link from "next/link";
import { addToCart } from "./plan-precio";

export default function ComprarBoton({ producto_id, user_id }: { producto_id: string, user_id: string | undefined }) {
  return (
    <Link href="/tienda/carrito-compras">
      <Button
        outline
        gradientDuoTone="purpleToBlue"
        className="w-full"
        onClick={() => addToCart(Number(producto_id), user_id)}
      >
        Comprar
      </Button>
    </Link>
  );
}
