'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/KVRPK_LOGO_small.png'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'

type LinkProps = {
    href: string
    text: string
}

const NavLink = ({ href, text }: LinkProps) => (
    <Link
        href={href}
        className="hover:text-darkGrey hover:scale-105 py-3 md:py-0">
        {text}
    </Link>
)

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
        <nav className="bg-lightBlue relative flex items-center justify-between px-6 py-2 text-center h-50 md:h-[3rem]">
            <div>
                <Link href="/">
                    <Image
                        src={Logo}
                        className="md:absolute block z-30 h-10 w-10 md:h-20 md:w-20 top-0  md:top-3"
                        alt="klubski logotip"
                    />
                </Link>
            </div>

            <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-8">
                {links.map((link, index) => (
                    <NavLink key={index} href={link.href} text={link.text} />
                ))}
            </div>

            <div className="block md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 z-30">
                    {isOpen ? (
                        <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="fixed z-20 top-0 left-0 md:hidden flex flex-col items-center self-end w-full h-screen max-h-full px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase bg-lightBlue overflow-y-auto">
                    {links.map((link, index) => (
                        <NavLink
                            key={index}
                            href={link.href}
                            text={link.text}
                        />
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navigation
