// create a navbar component
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';    

const Navbar = () => {
  return (
    <div className='bg-black'>
         <ul className='py-2 px-2 w-full flex flex-row justify-start items-center text-[15px] text-white'>
            <li className='mx-2 text-[20px] font-bold'><Link href="/">Metasurance</Link></li>
            <li className='pl-2 mx-1'><Link href="/policy">Policies</Link></li>
            <li className='mx-1'><Link href="/registration">Register</Link></li>
        </ul>
    </div>
  )
}

export default Navbar