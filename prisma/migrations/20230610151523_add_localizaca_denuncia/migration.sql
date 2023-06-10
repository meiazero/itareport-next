-- CreateTable
CREATE TABLE "LocalizacaoDenuncia" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "denunciaId" UUID NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LocalizacaoDenuncia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LocalizacaoDenuncia" ADD CONSTRAINT "LocalizacaoDenuncia_denunciaId_fkey" FOREIGN KEY ("denunciaId") REFERENCES "Denuncia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
