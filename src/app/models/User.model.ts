import { PrismaClient, User } from "@prisma/client"

const prisma = new PrismaClient()

async function createUser(userData: Partial<User>): Promise<User> {
    const user = await prisma.user.create({
        data: {
            name: userData.name || "",
            email: userData.email || "",
            password: userData.password || ""
        }
    })

    return user
}

export { createUser }
