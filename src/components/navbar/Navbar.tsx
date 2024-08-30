import React from 'react';
import Image from 'next/image';
const Navbar: React.FC = () => {
  return (
    <>
      <div className="min-w-full min-h-screen flex flex-col">
        <div className="min-w-full h-20 navbarBg flex justify-evenly items-center">
          <div className="flex flex-row items-center">
            <Image src="/Logo.svg" height={44} width={151} alt="logo" />
          </div>
          <div>
            <div>
              <nav>
                <ul className='flex flex-row gap-7 navbarText  ml-[85px]'>
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
          <div>
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
