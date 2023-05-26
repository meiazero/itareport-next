"use client"

import Footer from "../components/Footer"
import Header from "../components/Header"
import dynamic from "next/dynamic"

const DynamicMap = dynamic(() => import("../components/Map"), { ssr: false })

export default function Mapa() {
    return (
        <>
            <Header />
            <DynamicMap />
            <Footer />
        </>
    )
}
