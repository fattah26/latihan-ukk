"use client"

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function LayoutDashboard(props:Props) {
  const {children} = props
  return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden px-6">
          <Header />
          <main>{children}</main>
        </div>
      </div>
  );
}