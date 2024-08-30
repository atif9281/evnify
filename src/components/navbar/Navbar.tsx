import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col">
      <div className="min-w-full h-20 navbarBg flex justify-between sm:justify-between px-5 sm:px-10 md:px-0 lg:px-0 md:justify-start lg:justify-evenly items-center">

          <div className="flex flex-row items-center  md:ml-16 lg:ml-0">
            <Image src="/Logo.svg" height={44} width={151} alt="logo" />
          </div>

          {/* Hamburger Icon (Visible on small screens only) */}
          <div className="md:hidden lg:hidden">
            <Image src="/hamIcon.svg" height={50} width={50} alt="menu" />
          </div>

          {/* Navigation Menu (Hidden on small screens, visible on larger screens) */}
          <div className="hidden md:block lg:block">
            <div>
              <nav>
                <ul className='flex flex-row gap-7 navbarText md:ml-[30px]  lg:ml-[85px]'>
                  <li>Home</li>
                  <li>About</li>
                  <li>Pricing</li>
                  <li>Blog</li>
                  <li className='mr-2'>Contact Us</li>
                  <Image src="/Vector.svg" height={17} width={18} alt="logo" />
                </ul>
              </nav>
            </div>
          </div>

          {/* Sign in / Sign up Buttons */}
          <div className="hidden md:flex md:ml-6 lg:ml-0 lg:flex">
            <div className='flex'>
              <button className='buttonText buttonBorder mr-8'>Sign in</button>
              <button className='buttonText buttonBorder buttonBg'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
