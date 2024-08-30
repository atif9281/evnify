"use client";
import React, { useState } from 'react';
import Image from 'next/image';
export default function Signup() {


    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <>
            <div>
                <div className='mt-20 authCard navbarBg pt-7  pb-16 px-10 rounded-xl'>
                    <div className='flex flex-col'>
                        <h1 className='largeText buttonText mb-8'>Sign up</h1>
                        <p className='para mb-8'>Enter your credentials to continue</p>
                        <div className='flex flex-row'>
                            <div className='w-6/12 mr-6'>
                            <input type="text" className="custom-input mb-6" placeholder="Enter your name" />

                            </div>
                            <div className='w-6/12'>
                            <input type="text" className="custom-input mb-6" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='w-6/12 mr-6'>
                            <input type="text" className="custom-input mb-6" placeholder="Enter your name" />

                            </div>
                            <div className='w-6/12'>
                            <input type="text" className="custom-input mb-6" placeholder="Enter your name" />
                            </div>
                        </div>
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
                        <div className="relative w-full">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                className="custom-input mb-6 w-full pr-10" // Adjust padding to avoid overlap with the icon
                                placeholder="Enter your password"
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center -mt-6 pr-3 cursor-pointer"
                                onClick={toggleNewPasswordVisibility}
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
                                    <div className='checkBoxFieldW ml-2'>
                                        I agree to all the
                                        <span className='danger'> Terms</span> and
                                        <span className='danger'> Privacy Policies</span>
                                    </div>
                                </label>
                            </div>

                        </div>
                        <button className='block buttonTextS buttonBorderL buttonBgL mb-4'>Create account</button>
                        <div className='mb-10 flex justify-center items-center'> <p className='checkBoxFieldW'>dont have acount? <a className='dangerW'>signup</a> </p></div>
                        <div className="separator mb-9">
                            <span>or login with</span>
                        </div>
                        <div className='flex flex-row justify-between items-center gap-8 '>
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
}
