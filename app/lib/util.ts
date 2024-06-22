"use client";

import { useEffect, useRef, useState } from "react";
import { ProductoCarrito } from "@/app/lib/definitions";

export const isValidRut = (rut: string): boolean => {
  // Remove dots, hyphen, and convert to uppercase
  const cleanedRut = rut.replace(/[^0-9Kk]/g, "").toUpperCase();

  // Separate body and verifier
  const body = cleanedRut.slice(0, -1);
  const verifier = cleanedRut.slice(-1);

  // Validate length and digits
  if (body.length < 7 || body.length > 8 || !/^\d+$/.test(body)) {
    return false;
  }

  // Calculate expected verifier
  let sum = 0;
  let multiplier = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier < 7 ? multiplier + 1 : 2;
  }
  const expectedVerifier = 11 - (sum % 11);
  const expectedVerifierString =
    expectedVerifier === 11
      ? "0"
      : expectedVerifier === 10
        ? "K"
        : expectedVerifier.toString();

  // Check if provided verifier matches the expected one
  return verifier === expectedVerifierString;
};

export const formatRut = (rut: string): string => {
  // Remove dots and hyphen
  const cleanedRut = rut.replace(/[^0-9Kk]/g, "").toUpperCase();

  // Separate body and verifier
  const body = cleanedRut.slice(0, -1);
  const verifier = cleanedRut.slice(-1);

  // Add thousand separator
  const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Return formatted RUT
  return `${formattedBody}-${verifier}`;
};
export function contieneNumber(str: string) {
  return /\d/.test(str);
}

export function precioTotal(carrito: ProductoCarrito[]) {
  return carrito.reduce(
    (a, b) => a + b.cantidad * b.producto_carrito.precio,
    0,
  );
}
export function ahorros(carrito: ProductoCarrito[]) {
  return carrito.reduce(
    (a, b) =>
      a +
      b.cantidad *
        (b.producto_carrito.precio - (b.producto_carrito.precio_oferta || 0)),
    0,
  );
}

export function formatPriceWithSeparator(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export function useAnimationOnView(animationClass: string) {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationClass]);

  return ref;
}
