"use client";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function ComprarBoton({ producto_id }: { producto_id: string }) {
  return (
    <Link href="/tienda/carrito-compras">
      <Button
        outline
        gradientDuoTone="purpleToBlue"
        className="w-full"
        onClick={() => addToCart(Number(producto_id))}
      >
        Comprar
      </Button>
    </Link>
  );
}
