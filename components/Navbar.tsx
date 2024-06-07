import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>

      <Link href="/" className='flex items-center gap-1'>
      <Image 
        src="/icons/logo.png"
        width={50}
        height={50}
        alt="MeetEase"
      />
      </Link>

    </nav>
  )
}

export default Navbar