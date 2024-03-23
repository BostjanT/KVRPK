import Image from 'next/image'
import HeroImg from '../public/heroimage.webp'

const Hero = () => {
    return (
        <section>
            <div className="w-full  flex items-center flex-col-reverse md:p-6 mx-auto md:flex-row md:space-x-8 md:mb-0">
                <div className=" flex flex-col space-y-10 md:mt-16 md:w-1/2">
                    <h1 className="text-3xl font-bolder text-center text-dark uppercase md:text-5xl  md:text-left md:-mb-4 lg:text-6xl ">
                        klub vodnikov{' '}
                        <span className="text-alertOrange">
                            reševalnih psov
                        </span>{' '}
                        Kranj
                    </h1>
                    <p className="max-w-lg text-darkGrey  mx-auto text-center md:text-left md:mx-0">
                        Smo člani mednarodne organizacije vodnikov reševalnih
                        psov IRO, ter slovenske Zveze Vodnikov Reševalnih Psov.
                        Delujemo pa v okviru Uprave Republike Slovenije za
                        Zaščito in Reševanje ter Občine Kranj.
                    </p>
                </div>
                <div className="relative md:w-1/2 md:flex flex-col  mb-3 md:mb-0 md:self-end lg:mt-12">
                    <div className="bg-hero"></div>
                    <Image
                        src={HeroImg}
                        alt="dogs on a pile of rubble"
                        className="w-full md:h-full shrink-0  object-cover"
                        width="768"
                        height="214"></Image>
                </div>
            </div>
        </section>
    )
}

export default Hero
