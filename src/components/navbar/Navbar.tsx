"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  // State to manage the visibility of the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="min-w-full min-h-screen flex flex-col">
      <div className="min-w-full h-20 navbarBg flex justify-between sm:justify-between px-5 sm:px-10 md:px-0 lg:px-0 md:justify-start lg:justify-evenly items-center">
        <div className="flex flex-row items-center md:ml-16 lg:ml-0">
          <Image src="/Logo.svg" height={44} width={151} alt="logo" />
        </div>

        {/* Hamburger Icon / Close Icon (Visible on small screens only) */}
        <div className="md:hidden lg:hidden">
          {isMenuOpen ? (
            <Image
              src="/crossIcon.svg"
              height={50}
              width={50}
              alt="close"
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          ) : (
            <Image
              src="/hamIcon.svg"
              height={50}
              width={50}
              alt="menu"
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Navigation Menu (Hidden on small screens, visible on larger screens) */}
        <div className={`hidden md:block lg:block`}>
          <nav>
            <ul className='flex flex-row gap-7 xs:gap-1 sm:gap-2 md:gap-7 lg:gap-7 navbarText sm:ml-[30px] md:ml-[30px] lg:ml-[85px]'>
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li className='mr-2'>Contact Us</li>
              <Image src="/Vector.svg" height={17} width={18} alt="logo" />
            </ul>
          </nav>
        </div>

        {/* Sign in / Sign up Buttons */}
        <div className="hidden md:flex md:ml-6 lg:ml-0 lg:flex">
          <div className='flex'>
            <button className='buttonText buttonBorder mr-8'><Link href='login'>Sign in</Link></button>
            <button className='buttonText buttonBorder buttonBg'><Link href='sign-up'>Sign up</Link></button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Visible only on small screens) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col">
          {/* Navbar for Mobile Menu */}
          <div className="flex justify-between items-center p-5 border-b border-gray-300">
            <div className="flex flex-row items-center">
              <Image src="/Logo.svg" height={44} width={151} alt="logo" />
            </div>
            <Image
              src="/crossIcon.svg"
              height={50}
              width={50}
              alt="close"
              onClick={handleMenuToggle}
              className="cursor-pointer"
            />
          </div>
          {/* Navigation Menu List */}
          <div className="flex flex-col items-center mt-10">
            <nav>
              <ul className='flex flex-col gap-7'>
                <li onClick={handleMenuToggle} className="cursor-pointer">Home</li>
                <li onClick={handleMenuToggle} className="cursor-pointer">About</li>
                <li onClick={handleMenuToggle} className="cursor-pointer">Pricing</li>
                <li onClick={handleMenuToggle} className="cursor-pointer">Blog</li>
                <li onClick={handleMenuToggle} className="cursor-pointer">Contact Us</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
