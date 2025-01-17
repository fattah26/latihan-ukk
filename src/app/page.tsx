"use client";

import TextField from "@mui/material/TextField";
import CustomButton from "@/components/Button";
import { useState } from "react";
import CustomAlert from "@/components/Alert";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    nis: "",
    birthplace: "",
    birthdate: "",
    address: "",
    noHp: "",
    gender: "",
  });

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

      setSuccess(true);
      setFormData({
        name: "",
        nis: "",
        birthplace: "",
        birthdate: "",
        address: "",
        noHp: "",
        gender: "",
      });
      setMessage("Pendaftaran Berhasil");
    } catch (err: any) {
      setError(err.message);
      setMessage(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="p-5 w-1/2 border-2 rounded-lg bg-white shadow-md">
        <h1 className="text-sky-600 font-semibold text-xl mb-5 text-center">
          PENDAFTARAN ONLINE
          <p className="text-slate-800 text-base font-medium">SSB PERSISAC</p>
        </h1>
        <form
          onSubmit={handleSubmitCreate}
          className="w-full flex flex-col gap-8"
        >
          <TextField
            id="name"
            name="name"
            label="Name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />

          <div className="flex gap-4 w-full">
            <TextField
              id="birthplace"
              name="birthplace"
              label="Birthplace"
              placeholder="Enter birthplace"
              className="w-3/4"
              value={formData.birthplace}
              onChange={handleChange}
            />

            <TextField
              id="birthdate"
              name="birthdate"
              label="Birthdate"
              type="date"
              className="w-auto"
              value={formData.birthdate}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <TextField
            id="address"
            name="address"
            label="Address"
            placeholder="Enter address"
            multiline
            rows={4}
            value={formData.address}
            onChange={handleChange}
          />

          <TextField
            id="noHp"
            name="noHp"
            label="No HP"
            placeholder="Enter no HP"
            value={formData.noHp}
            onChange={handleChange}
          />

          <TextField
            id="nis"
            name="nis"
            label="NIS"
            placeholder="Enter NIS"
            value={formData.nis}
            onChange={handleChange}
          />

          <TextField
            id="gender"
            name="gender"
            label="Gender"
            placeholder="Enter gender"
            value={formData.gender}
            onChange={handleChange}
          />

          <CustomButton type="submit" size="large" disabled={loading}>
            {loading ? "Loading..." : "Kirim"}
          </CustomButton>
        </form>

              {success && <CustomAlert type="success">{message}</CustomAlert>}
      </section>
    </div>
  );
}
