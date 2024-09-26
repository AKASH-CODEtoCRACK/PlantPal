import Link from 'next/link';

export default function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-light-green to-dark-green p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-300">
            PlantPal
          </Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors duration-300">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-200 transition-colors duration-300">About</Link>
          </div>
        </div>
      </nav>
    );
}