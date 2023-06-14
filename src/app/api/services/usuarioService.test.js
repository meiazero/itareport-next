const { createUserService, getUserByEmail } = require("./usuarioService")
const prismaClient = require("../../config/prismaClient")

const testUser = {
    name: "Test User",
    email: "test@example.com",
    password: "Test1234"
}

beforeAll(async () => {
    await createUserService(testUser.name, testUser.email, testUser.password)
})

afterAll(async () => {
    await prismaClient.usuario.delete({ where: { email: testUser.email } })
})

describe("User Service", () => {
    test("createUserService should create a user", async () => {
        const newUser = {
            name: "New Test User",
            email: "newtest@example.com",
            password: "NewTest1234"
        }

        const createdUser = await createUserService(
            newUser.name,
            newUser.email,
            newUser.password
        )

        expect(createdUser).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: newUser.name,
                email: newUser.email
            })
        )

        // Limpar o usuário criado
        await prismaClient.usuario.delete({ where: { email: newUser.email } })
    })

    test("getUserByEmail should return a user with given email", async () => {
        const foundUser = await getUserByEmail(testUser.email)

        expect(foundUser).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: testUser.name,
                email: testUser.email
            })
        )
    })
})
