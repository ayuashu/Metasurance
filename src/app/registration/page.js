"use client"
import Link from 'next/link'
import React from 'react'
import {useRouter} from  'next/navigation'
import Navbar from '../components/Navbar/Navbar'

const Registration = () => {
  const router = useRouter()
  const navigate = (location) => {
      router.push(location)
  }

  return (
    <>
    <Navbar/>
    
    <div className="bg-cyan-50 min-h-screen p-4">
    <div className='text-7xl md:text-center pt-20'>Registration</div>
      <div className="flex items-center justify-center gap-8 pt-10"> 
          <button
            onClick={() => navigate('/registration/companyRegistration')}
            className="h-15 w-50 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="h-15 w-50 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Register as Company
            </span>
          </button>  
          <button
            onClick={() => navigate('/registration/userRegistration')}
            className="h-15 w-50 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
            <span class="h-15 w-50 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Register as User
            </span>
          </button>
        </div>
        <div className="flex items-center justify-center gap-8 pt-10"> 
          <button
            onClick={() => navigate('/')}
            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Go to Home Page
          </button>  
        </div>
      </div>
    </>
  )
}

export default Registration