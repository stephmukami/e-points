/*
  Warnings:

  - You are about to drop the column `generated_code` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `privacy_notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "generated_code";

-- DropTable
DROP TABLE "privacy_notes";

-- CreateTable
CREATE TABLE "generated_codes" (
    "code_id" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "generated_codes_pkey" PRIMARY KEY ("code_id")
);
