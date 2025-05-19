// src/components/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/references', label: 'References' },
    { href: '/scarywords', label: 'Scary Words' },
    { href: '/techniques', label: 'Techniques' },
    { href: '/tropes', label: 'Tropes' },
    { href: '/types', label: 'Types' },
  ];

  return (
    <aside
      role="complementary"
      className="w-full bg-gray-800 text-white p-4 z-10 flex flex-col items-center gap-4 sm:w-64 sm:h-screen sm:fixed sm:top-0 sm:left-0 sm:items-start sm:pt-28">
      <nav className="w-full">
        <ul className="flex flex-col items-center gap-4 sm:items-start sm:pl-6 sm:mt-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`hover:text-gray-400 ${pathname === href ? 'underline font-semibold' : ''}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

