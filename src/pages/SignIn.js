import React from 'react';
import './SignIn.css';
import './index.css';

const SignIn = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('../assets/images/3322.avif')" }}>
      <div className="bg-cover bg-center p-8 rounded-xl shadow-2xl w-full max-w-md relative" style={{ backgroundImage: "url('../assets/images/2222.avif')" }}>
        <div className="bg-white bg-opacity-80 p-6 rounded-lg backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in">Welcome Back!</h2>
          <p className="text-gray-600 mb-6 animate-fade-in delay-200">Please sign in to your account</p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              className="p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition transform hover:scale-105"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
