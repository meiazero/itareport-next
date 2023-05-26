export default function Footer() {
    return (
        <footer className='bg-gray-200 py-4 px-6'>
            <div className='text-center text-gray-600'>
                &copy; {new Date().getFullYear()} Itareport. Todos os direitos
                reservados.
            </div>
        </footer>
    )
}
