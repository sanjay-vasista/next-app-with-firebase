import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-purple-900 text-white py-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-2xl font-extrabold">Vasista</h1>
                <nav className="space-x-6 text-lg">
                    <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
                    <Link href="/about" className="hover:text-gray-400 transition duration-300">About</Link>
                    <Link href="/terms" className="hover:text-gray-400 transition duration-300">Terms & Conditions</Link>
                    <Link href="/contact" className="hover:text-gray-400 transition duration-300">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
