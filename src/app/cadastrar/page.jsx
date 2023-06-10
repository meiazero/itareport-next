"use client"

import { React, useState } from "react"
import { SHA256 } from "crypto-js"

import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from "axios"

export default function Cadastrar() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [surPassword, setSurPassword] = useState("")

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        return regex.test(email)
    }

    const validatePassword = (password, surpassword) => {
        return password === surpassword
    }

    const hashPassword = (password) => {
        return SHA256(password).toString()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!validateEmail(email)) {
            alert("E-mail inválido")
            return
        }

        if (!validatePassword(password, surPassword)) {
            alert("Senhas não conferem")
            return
        }

        const hashedPassword = hashPassword(password)

        axios
            .post("http://localhost:3000/api/criar-usuario", {
                name,
                email,
                password: hashedPassword
            })
            .then((response) => {
                console.log(response.data)

                if (response.data.error) {
                    alert(response.data.message)
                    return
                }

                alert("Usuário cadastrado com sucesso")
            })
            .catch((error) => {
                console.log(error)
                alert("Erro ao cadastrar usuário")
            })

        // Limpa os campos
        setName("")
        setEmail("")
        setPassword("")
        setSurPassword("")
    }

    return (
        <>
            <Header />
            <div className="max-w-2xl mx-auto my-2 py-3 bg-white rounded-md">
                <h1 className="text-4xl text-center font-semibold mb-5 mt-2 text-gray-700">
                    Cadastrar
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="px-8 pt-6 pb-8 mb-4"
                    method="POST"
                    autoComplete="off"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-2xl mb-4"
                            htmlFor="name"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="shadow appearance-none border rounded-sm w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite seu e-mail"
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-2xl mb-4"
                            htmlFor="email"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="shadow appearance-none border rounded-sm w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite seu e-mail"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-2xl mb-4"
                            htmlFor="password"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite sua senha"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-2xl mb-4"
                            htmlFor="surpassword"
                        >
                            Confirmar senha
                        </label>
                        <input
                            type="password"
                            id="surpassword"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Digite sua senha"
                            value={surPassword}
                            required
                            onChange={(e) => setSurPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-end ">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
