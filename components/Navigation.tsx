import Link from 'next/link'
import Logo from '../public/KVRPK_LOGO_small.png'
import Image from 'next/image'

const Navigation = () => {
    return (
        <header className="bg-lightBlue relative flex items-center justify-between px-6 py-2 text-center h-50 md:h-[3rem]">
            <div>
                <Link href="/">
                    {
                        <Image
                            src={Logo}
                            className="md:absolute h-10 w-10 md:h-20 md:w-20 top-0  md:top-3"
                            alt="klubski logotip"></Image>
                    }
                </Link>
            </div>
            <div className="flex items-center justify-center space-x-4 md:space-x-8">
                <Link
                    href="/klub"
                    className="hover:text-darkGrey hover:scale-105">
                    O nas
                </Link>
                <a
                    href="#resevalni"
                    className="hover:text-darkGrey hover:scale-105">
                    Reševalni pes
                </a>
                <a
                    href="#novice"
                    className="hover:text-darkGrey hover:scale-105">
                    Novice
                </a>
                <a
                    href="#solanje"
                    className="hover:text-darkGrey hover:scale-105">
                    Šolanje
                </a>
                <a
                    href="#galerija"
                    className="hover:text-darkGrey hover:scale-105 pr-10">
                    Galerija
                </a>
            </div>
        </header>
    )
}

export default Navigation
