"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const CompanyRegistration = () => {
        
      const router = useRouter()
        const navigate = (location) => {
        router.push(location)
    }
  return (
    <div className="flex items-center min-h-screen bg-black">
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 flex items-center justify-center">
              <img className="h-auto max-w-full rounded-full shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30  hover:scale-110" src="data:image/png;base64,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"
                  alt="img" />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
              <div className="w-full">
                  <div className="flex justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none"
                          viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                  </div>
                  <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                      Login to Your Account
                  </h1>
                  <div>
                      <label className="block text-sm">
                          Email
                      </label>
                      <input type="email"
                          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="" />
                  </div>
                  <div>
                      <label className="block mt-4 text-sm">
                          Password
                      </label>
                      <input
                          className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                          placeholder="" type="password" />
                  </div>
                  <p className="mt-4">
                      <a className="text-sm text-blue-600 hover:underline" href="./forgot-password.html">
                          Forgot your password?
                      </a>
                  </p>


                  <button
                      className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                      href="#">
                      Log in
                  </button>


                  <hr className="my-8" />


                  <div className="flex items-center justify-center gap-4">
                      <button onClick={() => navigate('/registration/companyRegistration/companyRegister')}
                          className="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
                          Register
                      </button>
                      <button onClick={() => navigate('/registration')}
                          className="flex items-center justify-center w-full px-4 py-2 text-sm text-black text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500">
                          Back to Registration
                      </button>
                   </div>
                </div> 
              </div> 
            </div> 
          </div>  
        </div> 
  );
}

export default CompanyRegistration;
