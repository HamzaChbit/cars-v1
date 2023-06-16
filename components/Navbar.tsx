'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header  className='w-full absolute z-10  ' >
        <nav className='max-w-[1440px]   mx-auto flex justify-between items-center sm:px-16 px-6 py-6' >
            <Link   className='flex justify-center items-center'  href='/'      >
            <Image  src='/logo.svg'   alt='Car Logo' width={118}  height={20} className='object-contain    '  />
            </Link>
        <CustomButton
                  title='Sign In '
                  btnType='button'
                  containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' handleClick={function (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
                      throw new Error('Function not implemented.')
                  } }/>

        </nav>
    </header>
  )
}

export default Navbar