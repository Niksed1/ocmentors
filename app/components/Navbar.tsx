"use client";

import { useState } from "react";
import Link from "next/link";

interface MenuItem {
  id: string;
  label: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    { id: "about", label: "About", href: "/about" },
    { id: "join-as-mentor", label: "Join as Mentor", href: "/join-as-mentor" },
    { id: "book-a-session", label: "Book a Session", href: "/book-a-session" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 relative" style={{ backgroundColor: '#1A1D29' }}>
        <div className="mx-auto max-w-7xl px-2 sm:px-3">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 relative">
              {/* Burger Menu Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-green hover:bg-primary-green/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
              <Link 
                href="/" 
                className="flex items-center transition-all duration-200 group h-full"
              >
                <img
                  src="/logo.png"
                  alt="OC Mentors/Tutors"
                  className="h-12 w-auto object-contain transition-all duration-200 group-hover:brightness-150"
                  style={{
                    mixBlendMode: 'multiply',
                    filter: 'brightness(1.1)',
                    display: 'block',
                    maxHeight: '100%'
                  }}
                />
              </Link>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-1 w-48 shadow-lg rounded-md border border-white/20 overflow-hidden transform transition-all duration-300 ease-in-out z-50 ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
                style={{ backgroundColor: '#1A1D29' }}
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-white hover:bg-primary-green/10 hover:text-primary-green transition-colors cursor-pointer border-b border-white/20 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-white hover:text-primary-green hover:bg-primary-green/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2">
                Login
              </button>
              <Link
                href="https://linktr.ee/ocmentors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium bg-primary-green text-white hover:bg-accent-green transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

