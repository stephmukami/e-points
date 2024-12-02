/*
  Warnings:

  - The primary key for the `airtime_points` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "airtime_points" DROP CONSTRAINT "airtime_points_pkey",
ADD CONSTRAINT "airtime_points_pkey" PRIMARY KEY ("user_id");
