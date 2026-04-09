'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  // Base links
  const links = [
    { href: '/', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/', label: 'Fiction Map' },
  ];

  if (isLoggedIn) {
    links.push({ href: '#', label: 'Logout', onClick: handleLogout });
  } else {
    links.push(
      { href: '/signup', label: 'Signup' },
      { href: '/login', label: 'Login' }
    );
  }

  return (
    <header className="w-full z-50 bg-black border-b border-gray-900 shadow-lg h-20 flex flex-col sm:flex-row justify-between items-center px-6 sm:pl-64 relative overflow-hidden">

      {/* Animated fog/gradient behind header */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-20 animate-fade-slow"></div>
      </div>

      {/* Left: Logo + Site Name */}
      <div className="flex items-center gap-3 z-10">
        <div className="relative h-12 w-12">
          <Image
            src="/vercel.svg"
            alt="Site Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <span className="text-2xl sm:text-3xl font-extrabold font-serif uppercase tracking-widest text-red-700 drop-shadow-[0_0_8px_rgba(255,0,0,0.7)] flicker glow-hover">
          My Website
        </span>
      </div>

      {/* Right: Navigation */}
      <nav className="flex gap-4 z-10 mt-2 sm:mt-0">
        {links.map(({ href, label, onClick }) => (
          onClick ? (
            <button
              key={label}
              onClick={onClick}
              className="uppercase tracking-widest font-serif text-gray-400 hover:text-red-600 flicker glow-hover transition px-2 py-1 rounded border border-gray-700"
            >
              {label}
            </button>
          ) : (
            <Link
              key={label}
              href={href}
              className={`uppercase tracking-widest font-serif text-gray-400 hover:text-red-600 flicker glow-hover transition px-2 py-1 rounded border border-gray-700 ${pathname === href ? 'underline font-semibold' : ''}`}
            >
              {label}
            </Link>
          )
        ))}
      </nav>

    </header>
  );
}

export default Header;