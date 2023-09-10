"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Navigation from './components/Navigation/page'
import Footer from './components/Footer/footer'

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
          <div className="container mx-auto p-4">
              <div className="mt-4 md:mt-0 text-right pr-3">
                  <button
                    onClick={() => navigate('/registration/userRegistration')}
                    className="h-10 w-22 text-gray-1000 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-sm px-5 py-2.5 text-center "> 
                      User
                  </button> 
                  <button
                    onClick={() => navigate('/registration/companyRegistration')}
                    className="ml-3 h-10 w-22 text-gray-1000 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-full text-sm px-5 py-2.5 text-center "> 
                      Company
                  </button>
              </div>
          
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h1 className="text-6xl">Welcome to METASURANCE</h1>
                  <p className="mt-2 md:w-96">Some message here.</p>
                </div>
              </div>
                
              <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex w-1/2 flex-wrap">
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                    </div>
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                    </div>
                  </div>
                  <div class="flex w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                    </div>
                    <div class="w-1/2 p-1 md:p-2">
                      <img
                        alt="gallery"
                        class="block h-full w-full rounded-lg object-cover object-center"
                        src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        <Footer/>
      </div>  
    </>
  )
}    
export default Page