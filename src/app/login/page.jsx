"use client"

import { React, useState } from "react"

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // Lógica de autenticação ou chamada de API aqui
        console.log("Email:", email)
        console.log("Senha:", password)
        // Limpa os campos
        setEmail("")
        setPassword("")
    }

    return (
        <div className='max-w-2xl mx-auto mt-40 py-3 bg-white rounded-md'>
            <h1 className='text-4xl text-center font-semibold mb-5 mt-2 text-gray-700'>
                Login
            </h1>
            <form
                onSubmit={handleSubmit}
                className='px-8 pt-6 pb-8 mb-4'
                method='POST'
                autoComplete='off'
            >
                <div className='mb-4'>
                    <label
                        className='block text-gray-700 text-2xl mb-4'
                        htmlFor='email'
                    >
                        E-mail
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='shadow appearance-none border rounded-sm w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Digite seu e-mail'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-6'>
                    <label
                        className='block text-gray-700 text-2xl mb-4'
                        htmlFor='password'
                    >
                        Senha
                    </label>
                    <input
                        type='password'
                        id='password'
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Digite sua senha'
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex items-center justify-end '>
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </div>
    )
}
