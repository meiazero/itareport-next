export async function GET(request) {
    const denuncia = [
        {
            id: 1,
            titulo: "Denuncia 1",
            descricao: "Descrição da denuncia 1",
            data: "2021-01-01",
            status: "Em análise"
        }
    ]

    return new Response(JSON.stringify(denuncia), {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        }
    })
}
