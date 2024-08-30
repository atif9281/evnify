"use client";
import React, { useState } from 'react';
import Image from 'next/image';


const Login: React.FC = () => {

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <div className='mt-20 authCard navbarBg pt-24 pb-20 px-10 rounded-xl'>
          <div className='flex flex-col'>
            <h1 className='largeText buttonText mb-4'>Hi, Welcome Back</h1>
            <p className='para mb-8'>Enter your credentials to continue</p>
            <input type="text" className="custom-input mb-6" placeholder="Enter your name" />
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                className="custom-input mb-6 w-full pr-10" // Adjust padding to avoid overlap with the icon
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center -mt-6 pr-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <Image
                  src="/password.svg"
                  alt="Toggle password visibility"
                  width={48}
                  height={48}
                />
              </div>
            </div>
            <div className='flex flex-row justify-between mb-5'>
              <div className="">
                <label className="custom-checkbox-container">
                  <input type="checkbox" className="custom-checkbox" />
                  <span className="checkmark"></span>
                  <p className=' checkBoxField ml-2'>Remember me</p>
                </label>
              </div>
              <a className='danger'>forgot password</a>
            </div>
            <button className='block buttonTextS buttonBorderL buttonBgL mb-4'>Login</button>
            <div className='mb-10 flex justify-center items-center'> <p className='checkBoxFieldW'>dont have acount? <a className='dangerW'>signup</a> </p></div>
            <div className="separator mb-9">
              <span>or login with</span>
            </div>
            <div className='flex flex-row justify-between items-center gap-8'>
              <button className='buttonBorderL w-6/12 flex justify-center'>
                <Image src="/fb.svg" height={17} width={18} alt="logo" />
              </button>
              <button className='buttonBorderL w-6/12 flex justify-center'>
                <Image src="/google.svg" height={17} width={18} alt="logo" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Login;
