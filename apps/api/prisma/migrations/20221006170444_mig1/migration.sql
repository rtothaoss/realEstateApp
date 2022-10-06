-- CreateTable
CREATE TABLE "savedsearches" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "savedsearches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "savedhomes" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "beds" INTEGER NOT NULL,
    "bath" INTEGER NOT NULL,
    "sqft" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "yearBuilt" INTEGER NOT NULL,
    "heating" TEXT NOT NULL,
    "cooling" TEXT NOT NULL,
    "parking" TEXT NOT NULL,
    "lot" INTEGER NOT NULL,
    "pricePerSqft" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "savedhomes_pkey" PRIMARY KEY ("id")
);
