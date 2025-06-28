'use client';
import React, { useState } from 'react';
import { FcHome, FcAbout } from 'react-icons/fc';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Image from 'next/image';

function MenuItem({ title, address, Icon, className }) {
  return (
    <Link href={address} className={className}>
      <div className="flex items-center space-x-1">
        {Icon && <Icon className="text-lg" />}
        <span>{title}</span>
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <MenuItem
                title="Home"
                address="/"
                Icon={FcHome}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-500 transition-colors duration-200 font-medium"
              />
              <MenuItem
                title="About"
                address="/about"
                Icon={FcAbout}
                className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-500 transition-colors duration-200 font-medium"
              />
            </div>
            <DarkModeSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <DarkModeSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-500 p-2 rounded-md transition-colors duration-200"
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden z-50">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg">
              <div onClick={() => setIsMenuOpen(false)}>
                <MenuItem
                  title="Home"
                  address="/"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200 font-medium"
                />
              </div>
              <div onClick={() => setIsMenuOpen(false)}>
                <MenuItem
                  title="About"
                  address="/about"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-700 dark:hover:text-orange-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200 font-medium"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
