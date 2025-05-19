// src/components/Navigation.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/signup', label: 'Signup' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <nav
      role="navigation"
      className="fixed top-12 left-0 w-full h-16 z-30 bg-black text-white px-6 sm:pl-64 border-b-2 border-borderblue">
      <ul className="flex flex-wrap justify-center items-center h-full space-x-0">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`border border-borderblue px-1 py-1 rounded hover:text-gray-400 hover:border-gray-400 transition ${pathname === href ? 'underline font-semibold' : ''
                }`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
