import { PrismaClient, LocalizacaoDenuncia } from "@prisma/client"

const prisma = new PrismaClient()

async function criarLocalizacaoDenuncia(
    localizacaoDenunciaData: Partial<LocalizacaoDenuncia>
): Promise<LocalizacaoDenuncia> {
    const localizacaoDenuncia = await prisma.localizacaoDenuncia.create({
        data: {
            id: localizacaoDenunciaData.id || "",
            createdAt: localizacaoDenunciaData.createdAt || new Date(),
            updatedAt: localizacaoDenunciaData.updatedAt || new Date(),
            denunciaId: localizacaoDenunciaData.denunciaId || "",
            latitude: localizacaoDenunciaData.latitude || 0,
            longitude: localizacaoDenunciaData.longitude || 0
        }
    })

    return localizacaoDenuncia
}

export default criarLocalizacaoDenuncia
