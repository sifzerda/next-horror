// src/components/Sidebar.js

import Link from 'next/link';

function Sidebar() {
  return (
    <aside
      className="
        w-full bg-gray-800 text-white p-4 z-10
        flex flex-col items-center gap-4
        sm:w-64 sm:h-screen sm:fixed sm:top-0 sm:left-0 sm:items-start sm:pt-24
      "
    >
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-4 sm:items-start sm:pl-6">
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
