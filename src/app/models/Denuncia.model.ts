import { PrismaClient, Denuncia } from "@prisma/client"

const prisma = new PrismaClient()

async function criarDenuncia(
    denunciaData: Partial<Denuncia>
): Promise<Denuncia> {
    const denuncia = await prisma.denuncia.create({
        data: {
            id: denunciaData.id || "",
            title: denunciaData.title || "",
            content: denunciaData.content || "",
            createdAt: denunciaData.createdAt || new Date(),
            updatedAt: denunciaData.updatedAt || new Date(),
            validated: denunciaData.validated || false,
            userId: denunciaData.userId || ""
        }
    })

    return denuncia
}

export default criarDenuncia
