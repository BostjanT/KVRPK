import Link from 'next/link'
import Logo from '../public/KVRPK_LOGO_small.png'
import Image from 'next/image'
import Hamburger from './HamburgerMenu'

const Navigation = () => {
    return (
        <nav className="bg-lightBlue relative flex items-center justify-between px-6 py-2 text-center h-50 md:h-[3rem]">
            <div>
                <Link href="/">
                    {
                        <Image
                            src={Logo}
                            className="md:absolute block z-30 h-10 w-10 md:h-20 md:w-20 top-0  md:top-3"
                            alt="klubski logotip"></Image>
                    }
                </Link>
            </div>
            <div className="hidden md:flex items-center justify-center space-x-4 md:space-x-8">
                <Link
                    href="/klub"
                    className="hover:text-darkGrey hover:scale-105">
                    O nas
                </Link>
                <Link
                    href="#resevalni"
                    className="hover:text-darkGrey hover:scale-105">
                    Reševalni pes
                </Link>
                <Link
                    href="#novice"
                    className="hover:text-darkGrey hover:scale-105">
                    Novice
                </Link>
                <Link
                    href="#solanje"
                    className="hover:text-darkGrey hover:scale-105">
                    Šolanje
                </Link>
                <Link
                    href="#galerija"
                    className="hover:text-darkGrey hover:scale-105 pr-10">
                    Galerija
                </Link>
            </div>
            <Hamburger />
        </nav>
    )
}

export default Navigation
