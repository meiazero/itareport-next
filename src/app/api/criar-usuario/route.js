import prismaClient from "../../database/prismaClient"

export async function POST(request) {
    try {
        const { email, name, password } = await request.json()

        const usuario = await prismaClient.usuario.create({
            data: {
                name,
                email,
                password
            }
        })

        return new Response(JSON.stringify(usuario), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify("Usuário não criado"), {
            status: 500
        })
    }
}
