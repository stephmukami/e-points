-- CreateTable
CREATE TABLE "airtime_points" (
    "transaction_id" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "airtime_points_pkey" PRIMARY KEY ("transaction_id")
);

-- AddForeignKey
ALTER TABLE "airtime_points" ADD CONSTRAINT "airtime_points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
