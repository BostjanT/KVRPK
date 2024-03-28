'use client'

import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/KVRPK_LOGO_small.png'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './NavLinks'
import { useState } from 'react'

const MyNavigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="bg-lightBlue flex flex-col md:flex-row items-center md:justify-between px-6 py-6 text-center">
            <div className="flex items-center justify-between w-full">
                {/* LOGO */}
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="md:absolute block z-30 h-10 w-10 md:h-20 md:w-20 top-0  md:top-10"
                        />
                    </Link>
                </div>
                {/* Hamburger SVG Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none  rounded-md p-2">
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3BottomRightIcon className="w-6 h-6" />
                        )}
                    </button>
                </div>
                {/* Main Menu Items */}
                <div className="hidden md:flex md:space-x-8 ">
                    <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 ">
                    <div className="flex flex-col   ham-height gap-6 items-center justify-center">
                        <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default MyNavigation
