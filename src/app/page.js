"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Navigation from './components/Navigation/page'
import Footer from './components/Footer/footer'
import PolicyAnimation from './components/PolicyAnimation/PolicyAnimation'

const Page = () => {
  const router = useRouter()
  const navigate = (location) => {
    router.push(location)
  }

  return (
    <>
      <Navigation />
      l
      <div className="bg-slate-200 min-h-screen">
        <div className="container mx-auto p-4 flex flex-row flex-wrap">
          <div className="flex flex-col justify-between items-center">
            <div className='w-full'>
              <h1 className="text-6xl">Welcome to METASURANCE</h1>
              <div className="md:w-96 lg:w-fit mt-16 mx-auto text-5xl">Who are you?</div>
            </div>
            <span className='h-16'></span>
            <button
              onClick={() => navigate('/registration/userRegistration')}
              className="px-20 py-5 md:min-w-[250px] rounded-md text-white font-bold text-xl bg-slate-500 hover:bg-slate-700">
              User
            </button>
            <span className='h-14'></span>
            <button
              onClick={() => navigate('/registration/companyRegistration')}
              className="px-20 py-5 md:min-w-[250px] rounded-md text-white font-bold text-xl bg-amber-400 hover:bg-amber-600">
              Company
            </button>
          </div>
          {/* lotte section */}
          <PolicyAnimation />
        </div>

        <Footer />
      </div>
    </>
  )
}
export default Page