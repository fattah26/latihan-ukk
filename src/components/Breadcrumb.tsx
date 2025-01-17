"use client"

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MENU } from "@/contans/routes"

export default function Breadcrumb() {
  const pathname = usePathname();

const breadcrumbs = pathname
  .split("/")
  .filter((path) => path)
  .map((crumb, index, array) => {
    const link = `/${array.slice(0, index + 1).join("/")}`;
    const page = MENU.find((item) => item.path === link) || {
      name: crumb.charAt(0).toUpperCase() + crumb.slice(1),
    };
    return {
      name: page.name,
      link,
    };
  });
  return (
    <nav className="flex items-center mt-3 space-x-2 text-gray-600 breadcrumbs">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.link} className="flex items-center space-x-2">
            {index > 0 && (
              <span>/</span>
            )}
            <Link
              href={crumb.link}
              className={`${
                index === breadcrumbs.length - 1
                  ? "text-sky-600 font-semibold"
                  : "text-slate-800 hover:underline"
              } text-sm`}
            >
              {crumb.name}
            </Link>
          </div>
        ))}
      </nav>
  );
}
