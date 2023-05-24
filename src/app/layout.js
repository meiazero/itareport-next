import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata = {
    title: "Ita Report",
    description: "ajudando a comunidade de Itapajé a se manter informada"
}

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "600", "800"]
})

export default function RootLayout({ children }) {
    return (
        <html lang='pt-br'>
            <body className={montserrat.className}>{children}</body>
        </html>
    )
}
