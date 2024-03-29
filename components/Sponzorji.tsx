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
        <div className="flex flex-col px-2 md:px-0 items-center justify-center py-20 my-8 sponsor-shadow">
            <h2 className="font-normal mb-8">hvala, da nas podpirate</h2>
            <div className="flex flex-col items-center md:flex-row gap-8 ">
                {links.map((link, index) => {
                    return (
                        <Link href={link.href} key={index} target="_blank">
                            <Image
                                src={link.image}
                                alt="link.alt"
                                className=" shadow-lg shadow-gray-400 hover:shadow-lg hover:shadow-darkGrey"
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
export default Sponzorji
