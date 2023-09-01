"use client"
import Link from 'next/link'
import React from 'react'
import {useRouter} from  'next/navigation'

const Registration = () => {
  const router = useRouter()
  const navigate = (location) => {
      router.push(location)
  }

  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1>Registration</h1>
      <button onClick={() => navigate('/registration/companyRegistration')}>Register as Company</button>
      <br/>
      <button onClick={() => navigate('/registration/userRegistration')}>Register as User</button>
      <br/>
      <Link href='/'>Go to Home Page</Link>
    </div>
  )
}

export default Registration