"use client"

import { useState } from "react";
import TextField from "@mui/material/TextField";
import CustomButton from "@/components/Button";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const staticEmail = "admin@gmail.com";
    const staticPassword = "admin123";

    if (email === staticEmail && password === staticPassword) {
      setError("");
      router.push("/dashboard/siswa");
    } else {
      setError("Email atau password salah!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="p-5 w-full max-w-sm border-2 rounded-lg bg-white shadow-md">
        <h1 className="text-sky-600 font-semibold text-xl mb-5 text-center">
          MASUK
          <p className="text-slate-800 text-base font-medium">
            Selamat datang, silahkan masuk
          </p>
        </h1>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
          <TextField
            id="email"
            label="Email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <CustomButton type="submit" size="large">
            Masuk
          </CustomButton>
        </form>
      </section>
    </div>
  );
}
