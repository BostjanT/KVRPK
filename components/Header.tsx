'use client'
import Navigation from './Navigation'
import useWidth from './useWidth'
import Hamburger from './Hamburger'
import Image from 'next/image'
import Logo from '../public/KVRPK_LOGO_small.png'
import Link from 'next/link'

const Header = () => {
    const { isLower } = useWidth(768)

    return (
        <header className="bg-lightBlue flex items-center justify-between px-6 py-2 text-center h-20 ">
            <div>
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src={Logo}
                        alt="Logo"
                        className="md:absolute block z-30 h-10 w-10 md:h-20 md:w-20 top-0  md:top-8"
                    />
                </Link>
            </div>
            {isLower ? <Hamburger /> : <Navigation />}
        </header>
    )
}
export default Header
