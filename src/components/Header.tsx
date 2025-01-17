"use client";
import Breadcrumb from "./Breadcrumb";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathName = usePathname();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    if(pathName === "/dashboard/siswa") {
      setTitle("Siswa")
    } else if(pathName === "/dashboard/guru-karyawan"){
      setTitle("Guru Karyawan")
    }
  }, [pathName]);

  return (
    <header className="sticky top-0 z-10 pt-10 pb-5 w-full h-32 items-center">
      <h1 className="text-black font-semibold text-2xl">{title}</h1>
      <div className="flex items-center mt-3 space-x-2 text-gray-600 breadcrumbs">
        <Breadcrumb />
      </div>
    </header>
  );
}
