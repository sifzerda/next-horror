// src/components/Sidebar.js

import Link from 'next/link';

function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white p-6 fixed top-0 left-0 z-20">
      <nav>
        <ul className="flex flex-col space-y-4 pt-12">
          {/* Padding top to not clash with top nav */}
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
    </aside>
  );
}

export default Sidebar;
