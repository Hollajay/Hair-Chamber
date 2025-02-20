import React from 'react'
import logo from '../assets/logo.avif'
import { FaUser } from 'react-icons/fa'
import { MdMenu, MdClose } from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky bg-black top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='mr-2' src={logo} alt="logo" />
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12 text-white'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href='#' className='py-2 px-3 border-none text-white text-2xl'> <FaUser/></a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end text-white text-3xl">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <MdClose/> : <MdMenu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden">
                    <ul className='text-white'>
                        <li className='py-4'><a href='#'>Home</a></li>
                        <li className='py-4'><a href='#'>Shop</a></li>
                        <li className='py-4'><a href='#'>About</a></li>
                        <li className='py-4'><a href='#'>Contact</a></li>
                        <li className='py-4'><a href='#'>FAQ</a></li>
                    </ul>
                    <div className='flex space-x-6'>
                        <a href='#' className='py-2 px-3 text-white text-2xl'><FaUser/></a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar