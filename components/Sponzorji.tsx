import Image, { StaticImageData } from 'next/image'
import PasjiNet from '@/public/pasjinet.jpg'
import Triglav from '@/public/logo_triglav.png'
import Hertz from '@/public/Hertz_.jpg'
import Link from 'next/link'

type SponzorjiProps = {
    href: string
    image: StaticImageData
    alt: string
}[]

const Sponzorji = () => {
    const links: SponzorjiProps = [
        { href: 'https://www.pasji.net', image: PasjiNet, alt: 'pasjinet' },
        {
            href: 'https://www.triglav.eu/sl',
            image: Triglav,
            alt: 'triglav',
        },
        { href: 'https://hertz-slovenija.si/', image: Hertz, alt: 'hertz' },
    ]
    return (
        <div className="flex flex-col px-2 md:px-0 space-y-8 md:space-x-20 md:space-y-0 md:flex-row items-center justify-center py-20 my-8 sponsor-shadow">
            <h2 className="font-normal">hvala, da nas podpirate</h2>
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index}>
                        <Image
                            src={link.image}
                            alt="link.alt"
                            className=" shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-darkGrey"
                        />
                    </Link>
                )
            })}
        </div>
    )
}
export default Sponzorji
