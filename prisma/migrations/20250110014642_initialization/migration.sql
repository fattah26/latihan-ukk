-- CreateTable
CREATE TABLE `Siswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `nis` VARCHAR(20) NOT NULL,
    `noHp` VARCHAR(15) NOT NULL,
    `dob` DATETIME(3) NULL,
    `address` VARCHAR(255) NULL,
    `gender` VARCHAR(10) NULL,

    UNIQUE INDEX `Siswa_nis_key`(`nis`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
