// src/components/Navigation.js

import Link from 'next/link';

function Navigation() {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-4 fixed top-0 left-0 z-10 pl-64">
      {/* Padding left to make space for the fixed sidebar */}
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
        </li>
        <li>
          <Link href="/references" className="hover:text-gray-400">References</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;