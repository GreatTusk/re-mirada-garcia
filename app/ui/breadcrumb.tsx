"use client";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { links } from "@/app/lib/data";

export function Breadcrumbs() {
  const path = usePathname();
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HiHome}>
        Inicio
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        {links.map((link) => (path === link.path ? link.label : ""))}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}
