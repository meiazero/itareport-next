export default function Header() {
    return (
        <header className='flex items-center justify-between bg-gray-900 py-5 px-6'>
            <div className='text-white text-3xl font-bold'>Itareport</div>
            <nav className='space-x-5'>
                <a href='/login' className='text-white'>
                    logar
                </a>
                <a
                    href='#'
                    className='text-white rounded-md border border-slate-100 p-2 hover:bg-slate-100 hover:text-gray-900 transition duration-100 ease-in-out'
                >
                    cadastrar
                </a>
            </nav>
        </header>
    )
}
