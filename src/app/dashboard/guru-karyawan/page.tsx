"use client";
import DynamicTable from "@/components/Tables";

export default function GuruPage(){


  const header = [
    { key: "id", label: "No", minWidth: 50 },
    { key: "name", label: "Nama", minWidth: 150 },
    { key: "jk", label: "Jenis Kelamin", minWidth: 100 },
    { key: "noHp", label: "No HP", minWidth: 150 },
  ];

  return (
    <div className="flex items-center">
      <div className="w-full bg-white">
        <DynamicTable data={guru} header={header} />
      </div>
    </div>
  );
};
