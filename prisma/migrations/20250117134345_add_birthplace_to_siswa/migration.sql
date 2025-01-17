/*
  Warnings:

  - You are about to drop the column `dob` on the `siswa` table. All the data in the column will be lost.
  - Added the required column `birthdate` to the `Siswa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthplace` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `siswa` DROP COLUMN `dob`,
    ADD COLUMN `birthdate` DATETIME(3) NOT NULL,
    ADD COLUMN `birthplace` VARCHAR(191) NOT NULL;
