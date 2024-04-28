-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "tag" TEXT NOT NULL,
    "heading" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "carduser" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
