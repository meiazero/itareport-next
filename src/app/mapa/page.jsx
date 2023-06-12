"use client"
import dynamic from "next/dynamic"

import Footer from "../components/Footer"
import Header from "../components/Header"
import Loading from "../components/Loading"

const DynamicMap = dynamic(() => import("../components/Map"), {
    ssr: false,
    loading: () => <Loading />
})

export default function Mapa() {
    return (
        <div>
            <Header />
            <DynamicMap />
            <Footer />
        </div>
    )
}
