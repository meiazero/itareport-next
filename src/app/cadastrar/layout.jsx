export const metadata = {
    title: "Cadastro | Itareport",
    description: "ajudando a comunidade de Itapajé a se manter informada"
}

export default function RootLayout({ children }) {
    return (
        <html lang="pt-br">
            <body>{children}</body>
        </html>
    )
}
