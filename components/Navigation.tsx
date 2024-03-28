'use client'
import { useState } from 'react'
import Link from 'next/link'

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
        <nav className="bg-lightBlue  flex flex-col md:flex-row items-center md:justify-between px-6 py-2 text-center">
            {links.map((link, index) => (
                <Link
                    href={link.href}
                    key={index}
                    className="py-2 font-medium tracking-wide px-4 text-white hover:text-darkGrey transition-colors duration-300 rounded-md">
                    {link.text}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation
