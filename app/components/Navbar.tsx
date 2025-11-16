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
    { id: "about", label: "About us", href: "#about" },
    { id: "subjects", label: "Subjects", href: "#subjects" },
    { id: "tutors", label: "Tutors", href: "#tutors" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-3">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Burger Menu Button */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-dark-purple hover:text-primary-green hover:bg-primary-green/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2"
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
              <Link href="/" className="text-2xl font-bold text-primary-green hover:opacity-80 transition-opacity">
                OC Mentors
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium text-dark-purple hover:text-primary-green hover:bg-primary-green/10 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2">
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

      {/* Side Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={closeMenu}
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-16">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="px-6 py-4 text-dark-purple hover:bg-primary-green/10 hover:text-primary-green transition-colors cursor-pointer border-b border-light-gray"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

