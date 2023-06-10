export async function GET(request) {
    const message = "login route"

    return new Response(message, { status: 200 })
}
