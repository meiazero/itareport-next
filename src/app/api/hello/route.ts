export async function GET(request: Request) {
    const message = "Hello World!"

    return new Response(message, { status: 200 })
}
