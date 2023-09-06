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
      <div className='py-5 px-10'>
        <p className='text-4xl'>Welcome to Metasurance</p>
        <p className='mt-10 text-[20px]'>Select what you want</p>
        <ul className='mt-5'>
          <li>
            <button onClick={() => navigate('/registration')}>Registration</button>
          </li>
          <li>
            <button onClick={() => navigate('/policy')}>Policy</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Page