"use client"
import Link from 'next/link'
import React from 'react'
import './globals.css';
import {useRouter} from  'next/navigation'

const Page = () => {
  const router = useRouter()
  const navigate = (location) => {
      router.push(location)
  }

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={() => navigate('/registration')}>Registration</button>
      <button onClick={() => navigate('/policy')}>Policy</button>
    </>
  )
}

export default Page