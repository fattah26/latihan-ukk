import { MENU } from "@/contans/routes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const [activeNav, setActiveNav] = useState<string | number | null>(null);
  const pathName = usePathname();

  useEffect(() => {
    const activeItem = MENU.find((item) => item.path === pathName);

    if (activeItem) {
      setActiveNav(activeItem.id);
    } else {
      setActiveNav(null);
    }
  }, [pathName]);

  return (
    <section className="space-y-2 flex flex-col">
      {MENU.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className={`p-2 font-medium text-lg rounded-md ${
            activeNav === item.id
              ? "bg-blue-500 text-white"
              : "hover:bg-slate-900"
          }`}
        >
          <h1 className="font-medium text-lg mx-2">{item.name}</h1>
        </Link>
      ))}
    </section>
  );
}
