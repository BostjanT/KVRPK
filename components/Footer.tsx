import Link from 'next/link'
import Facebook from '@/public/icon-facebook.svg'
import Logo from '@/public/KVRPK_LOGO_small.png'
import Image from 'next/image'
import { PhoneIcon, AtSymbolIcon, HomeIcon } from '@heroicons/react/24/outline'

const Footer = () => {
    return (
        <footer className="py-8 bg-dark">
            {/* <!-- Footer Flex Container --> */}
            <div className="container flex flex-col items-center justify-around mx-auto space-y-12 px-6 md:flex-row md:space-y-0">
                {/* <!-- Logo/Menu Container --> */}
                <div className="flex items-center justify-center">
                    <Image
                        src={Logo}
                        alt="klubski logotip"
                        className="mb-1 max-w-24"
                    />
                </div>
                <div className="flex flex-col items-center justify-between space-y-4 text-lg font-light  text-white">
                    <a href="#" className="uppercase hover:text-alertOrange">
                        O nas
                    </a>
                    <a href="#" className="uppercase hover:text-alertOrange">
                        Reševalni pes
                    </a>
                    <a href="#" className="uppercase hover:text-alertOrange">
                        Novice
                    </a>
                    <a href="#" className="uppercase hover:text-alertOrange">
                        Šolanje
                    </a>
                </div>
                {/* <!-- Klubski podatki --> */}
                <div className="flex flex-col items-center justify-between space-y-4 text-lg font-light  text-white">
                    <div className="flex items-center text-white">
                        <PhoneIcon className="h-6 w- mr-4" />
                        <p>+386 41 855 924</p>
                    </div>
                    <div className="flex items-center text-white">
                        <AtSymbolIcon className="h-6 w-6 mr-4" />
                        <p>info.kvrp.kranj@gmail.com</p>
                    </div>
                    <div className="flex items-center text-white">
                        <HomeIcon className="h-6 w-6 mr-4" />
                        <p className="text-center">
                            Vidmarjeva 3, Kranj Slovenija
                        </p>
                    </div>
                </div>

                {/* <!-- Social Container --> */}
                <div className="flex space-x-10">
                    <a href="#">
                        <Image
                            src={Facebook}
                            alt="social icon"
                            className="h-8 w-8  rounded-full m-3 hover:bg-alertOrange"
                        />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
