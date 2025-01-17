import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET: Ambil semua data siswa
export async function GET() {
  try {
    const siswa = await prisma.siswa.findMany();
    return NextResponse.json(siswa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Terjadi kesalahan saat mengambil data siswa" }, { status: 500 });
  }
}

// POST: Tambah data siswa baru
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newSiswa = await prisma.siswa.create({
      data: {
        name: body.name,
        nis: body.nis,
        noHp: body.noHp,
        birthplace: body.birthplace,
        birthdate: new Date(body.birthdate),
        address: body.address,
        gender: body.gender,
      },
    });
    return NextResponse.json(newSiswa);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Terjadi kesalahan saat menambahkan siswa" }, { status: 500 });
  }
}


// DELETE: Menghapus data

export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const { id } = body; 

    if (!id) {
      return NextResponse.json({ error: "ID siswa tidak ditemukan" }, { status: 400 });
    }

    const deletedSiswa = await prisma.siswa.delete({
      where: {
        id: id, 
      },
    });

    return NextResponse.json({ message: "Siswa berhasil dihapus", data: deletedSiswa });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Gagal menghapus siswa" }, { status: 500 });
  }
}
