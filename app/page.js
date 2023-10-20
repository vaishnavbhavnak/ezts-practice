'use client'
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/unnamed.png';
const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const sanitizedUsername = DOMPurify.sanitize(username);
    const sanitizedPassword = DOMPurify.sanitize(password);

    if (!sanitizedUsername) {
      alert('Enter Username again');
    }
    if (!sanitizedPassword) {
      alert('Enter Password again');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Image src={logo} 
        alt="Your Logo"
        width={100}
        height={100}
        className="absolute top-[50px] right-50% m-4"/>
      <div className="bg-white m-20 p-10 rounded-lg border border-black border-solid border-w-1 max-w-md w-full lg:max-w-lg h-100 grid grid-cols-1 gap-4">
        <div className="text-3xl pb-4 font-bold text-center">
          <h1>Sign In</h1>
        </div>
        <form className="flex flex-col space-y-4 text-lg" onSubmit={handleSubmit}>
          <label htmlFor="username">
            Username<sup className="text-red-500"> *</sup>
          </label>
          <input
            id="username"
            className="bg-gray-200 rounded-lg p-3 text-sm h-12 outline-none"
            placeholder="Username"
            type="text"
            required
          />
          <label htmlFor="password">
            Password<sup className="text-red-500"> *</sup>
          </label>
          <div className="bg-gray-200 rounded-lg flex">
            <input
              id="password"
              className="bg-transparent w-full h-12 p-2 text-sm outline-none"
              placeholder="Password"
              type={passwordVisible ? 'text' : 'password'}
              required
            />
            <span onClick={togglePasswordVisibility} className="inline-block p-3">
              {passwordVisible ? <AiFillEye size="24px" /> : <AiFillEyeInvisible size="24px" />}
            </span>
          </div>
          <div className="pt-[20px] italic text-gray-700 text-sm">
            <button className="w-full h-14 text-lg font-bold bg-black text-white rounded-full mb-4 hover:bg-gray-500" type="submit">
              Start Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

