/*
  Warnings:

  - Added the required column `propertyId` to the `savedhomes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "savedhomes" ADD COLUMN     "propertyId" INTEGER NOT NULL;
