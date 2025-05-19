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
      className="fixed top-12 left-0 w-full h-16 z-30 bg-gray-900 text-white px-6 sm:pl-64">
      <ul className="flex flex-wrap gap-4 justify-center items-center h-full">
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
  );
}

export default Navigation;
