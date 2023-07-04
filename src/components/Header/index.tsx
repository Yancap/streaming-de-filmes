import Image from 'next/image'
import React from 'react'
import { SignIn } from '../SignIn'

export const Header = () => {
  return (
    <header className='bg-gray-600 h-20'>
        <div className='mx-auto max-w-7xl flex justify-between items-center'>
          <div className='flex gap-10'>
            <Image src='/logo.svg' alt='logo' width='140' height='32'/>
            <nav className='flex gap-4'>
              <div className='div-link div-link-active'>
                  <a href="" className='link-active'>Home</a>
              </div>
              <div className='div-link'>
                  <a href="" className='link'>Catálogo</a>
              </div>
            </nav>
          </div>
          <SignIn />
        </div>
    </header>
  )
}
