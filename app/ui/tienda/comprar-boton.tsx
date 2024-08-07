"use client";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function ComprarBoton({
  producto_id,
  user_id,
}: {
  producto_id: number;
  user_id: string | undefined;
}) {
  return (
    <Link href="/carrito-compras">
      <Button
        outline
        gradientDuoTone="purpleToBlue"
        className="w-full"
        // onClick={() => addToCart(Number(producto_id), user_id)}
      >
        Comprar
      </Button>
    </Link>
  );
}
