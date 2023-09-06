// create a navbar component
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';    

const Navbar = () => {
  return (
    <div className='bg-blue-200'>
          <ul className='py-3 px-3 w-full flex flex-row justify-start items-center text-[20px] text-blue-700'>
        <li className='mx-2 text-[25px] font-bold'><Link href="/">Metasurance</Link></li>
        <li className='mx-2'><Link href="/policy">Policies</Link></li>
        <li className='mx-2'><Link href="/registration">Register</Link></li>
        </ul>
    </div>
  )
}

export default Navbar