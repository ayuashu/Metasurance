"use client"
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()
  const navigate = (location) => {
    router.push(location)
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center min-h-screen bg-cyan-50">
        <div className="flex-1 h-400 w-200 mx-auto bg-white rounded-lg shadow-xl">
            <div className='text-7xl md:text-center '>Welcome to Metasurance</div>
              <div className='my-5'>
              <hr className="my-2" />
                <div className="flex items-center justify-center gap-8 pt-5 bg-gray-950">  
                  <button
                    onClick={() => navigate('/registration')}
                    className="h-15 w-40 text-gray-1000 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
                      Registration
                  </button>
                  <button
                    onClick={() => navigate('/policy')}
                    className="h-15 w-40 text-gray-1000 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"> 
                    Policy
                  </button>
                </div>
              </div>
            </div>    
         </div>    
    </>
  )
}

export default Page