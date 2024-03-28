import Image from 'next/image'
import Fourth from '@/public/pointer.jpg'
import Fifth from '@/public/spaniel.jpg'
import Logo from '@/public/KVRPK_LOGO_small.png'

export const metadata = {
    title: 'KVRPK - Klub',
}

const Klub = () => {
    return (
        <section className="container md:max-w-5xl md:px-0 mb-8 md:my-8  mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <div className="bg-hero"></div>
            <Image
                src={Logo}
                alt="klubski logo"
                className="absolute hidden md:block top-[30vh] w-[14rem] -right-[10rem] -z-10 rotate-[30deg] opacity-70"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3">
                <div className="order-1 md:order-none md:col-span-1 md:row-span-1 flex items-center justify-center bg-darkGrey text-white">
                    <p className="px-8 py-8 md:py-0 text-center md:text-md">
                        Klub vodnikov reševalnih psov(KVRP) Kranj je bil
                        ustanovljen 05.04.1994 na pobudo vodnikov reševalnih
                        psov, ki so sodelovali že pred ustanovitvijo v različnih
                        reševalnih organizacijah. Danes šteje klub blizu 30
                        članov.
                    </p>
                </div>
                <div className="order-2 md:order-none md:col-span-1 md:row-span-1">
                    <Image
                        src={Fourth}
                        alt="about us image"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="order-4 md:order-none md:col-span-1 md:row-span-1">
                    <Image
                        src={Fifth}
                        alt="about us image"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="order-3 md:order-none md:col-span-1 md:row-span-1 flex items-center justify-center bg-darkGrey text-white">
                    <p className="px-8 py-8 md:py-0  text-center md:text-md">
                        Ukvarja se s šolanjem vodnikov reševalnih psov. V klubu
                        so začetniki, pripravniki kot tudi usposobljeni vodniki.
                        Predsednik KVRP Kranj je David Pogačnik. V svoji sestavi
                        imamo naslednje enote: 2 regijski enoti za območje
                        Gorenjske in enoto 10. članov MOK (Mestne občine Kranj).
                    </p>
                </div>
                <div className="order-5 md:order-none md:col-span-1 md:row-span-1  flex items-center justify-center bg-darkGrey text-white">
                    <p className="px-8 py-8 md:py-0  text-center md:text-md">
                        Smo člani mednarodne organizacije vodnikov reševalnih
                        psov IRO, ter slovenske Zveze Društev in Klubov Vodnikov
                        Reševalni Psov. Delujemo pa v okviru Uprave Republike
                        Slovenije za Zaščito in Reševanje ter Občine Kranj.
                    </p>
                </div>
                <div className="order-6 md:order-none md:col-span-1 md:row-span-1">
                    <Image
                        src={Fifth}
                        alt="about us image"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Klub
