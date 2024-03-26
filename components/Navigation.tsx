'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/KVRPK_LOGO_small.png'

type LinkProps = {
    href: string
    children: string
    onClick?: () => void
}
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { href: '/klub', text: 'O nas' },
        { href: '/resevalni', text: 'Reševalni pes' },
        { href: '/novice', text: 'Novice' },
        { href: '/solanje', text: 'Šolanje' },
        { href: '/galerija', text: 'Galerija' },
    ]
    return (
        <nav className="bg-lightBlue  flex flex-col md:flex-row items-center md:justify-between px-6 py-2 text-center h-50 md:h-[3rem]">
            <div className="flex items-center justify-between w-full">
                {/* LOGO */}
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="md:absolute block z-30 h-10 w-10 md:h-20 md:w-20 top-0  md:top-3"
                        />
                    </Link>
                </div>
                {/* Hamburger SVG Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none  rounded-md p-2">
                        {isOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                {/* Main Menu Items */}
                <div className="hidden md:flex md:space-x-4 ">
                    {links.map((link, index) => (
                        <NavLink key={index} href={link.href}>
                            {link.text}
                        </NavLink>
                    ))}
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2 ">
                    <div className="flex flex-col   ham-height overflow-y-hidden gap-6 items-center justify-center">
                        {links.map((link, index) => (
                            <MobileNavLink
                                key={index}
                                href={link.href}
                                onClick={() => setIsOpen(!isOpen)}>
                                {link.text}
                            </MobileNavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

const NavLink = ({ href, children }: LinkProps) => (
    <Link
        href={href}
        className="text-white hover:text-darkGrey transition-colors duration-300">
        {children}
    </Link>
)

const MobileNavLink = ({ href, children, onClick }: LinkProps) => (
    <Link
        href={href}
        onClick={onClick}
        className="block py-2 px-4 text-white  hover:text-darkGrey transition-colors duration-300 rounded-md">
        {children}
    </Link>
)

export default Navigation
