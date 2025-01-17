"use client";
import React, { useEffect, useState } from "react";
import DynamicTable from "@/components/Tables";
import CustomButton from "@/components/Button";
import FormCreate from "@/components/FormCreate";
import CustomAlert from "@/components/Alert";
import DeleteModal from "@/components/DeleteModal";

interface Siswa {
  id: number;
  name: string;
  nis: string;
  noHp: string;
}

const SiswaPage = () => {
  const [siswa, setSiswa] = useState<Siswa[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    nis: "",
    noHp: "",
  });
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const header = [
    { key: "id", label: "No", minWidth: 50 },
    { key: "name", label: "Name", minWidth: 150 },
    { key: "nis", label: "NIS", minWidth: 100 },
    { key: "noHp", label: "No HP", minWidth: 150 },
  ];

  // Fetch DATA
  const fetchSiswa = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/siswa");
      const data: Siswa[] = await response.json();
      setSiswa(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSiswa();
  }, []);

  // Handle perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit form
  const handleSubmitCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/siswa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const resData = await response.json();
        throw new Error(resData.error || "Gagal menambahkan siswa");
      }

      setIsFormOpen(false);
      setSuccess(true);
      fetchSiswa();
      setFormData({ name: "", nis: "", noHp: "" });
      setMessage("Siswa berhasil ditambah!");
    } catch (err:any) {
      setError(err.message);
      setMessage(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Handle Delete
  const deleteSiswa = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await fetch("/api/siswa", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: deleteId }),
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus siswa");
      }

      setSiswa(siswa.filter((s) => s.id !== deleteId));
      setIsDeleteModalOpen(false); 
      setSuccess(true);
      setMessage("Siswa berhasil dihapus!");
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus siswa:", error);
      setMessage(`Terjadi kesalahan: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClick = () => {
    setIsFormOpen(true);
  };

  const handleCancelCreate = () => {
    setIsFormOpen(false);
  };

  const openDeleteModal = (id: number) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setDeleteId(null);
  };

  return (
    <div className="flex items-center">
      <div className="w-full bg-white">
        <FormCreate
          isOpen={isFormOpen}
          onSubmit={handleSubmitCreate}
          onCancel={handleCancelCreate}
          onChange={handleChange}
          formData={formData}
          isLoading={loading}
        />

        <DeleteModal
          isOpen={isDeleteModalOpen}
          onSubmit={deleteSiswa}
          onCancel={handleCancelDelete}
          isLoading={loading}
        />

        <div className="flex gap-2 w-full justify-end my-8">
          <CustomButton size="medium" variant="outlined">
            Filter
          </CustomButton>
          <CustomButton size="medium" onClick={handleCreateClick}>
            Create
          </CustomButton>
        </div>

        <DynamicTable
          data={siswa}
          header={header}
          onDelete={openDeleteModal} 
        />
      </div>

      {success && <CustomAlert type="success">{message}</CustomAlert>}
    </div>
  );
};

export default SiswaPage;
