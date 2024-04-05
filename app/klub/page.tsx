import Image from 'next/image'
import Fourth from '@/public/pointer.jpg'
import Fifth from '@/public/spaniel.jpg'

import { PhoneIcon, AtSymbolIcon, HomeIcon } from '@heroicons/react/24/outline'

export const metadata = {
    title: 'KVRPK - Klub',
}

const Klub = () => {
    return (
        <section className="container md:max-w-5xl md:px-0 mb-8 md:my-8 mx-auto shadow-xl shadow-darkGrey relative">
            <div className="bg-hero"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 ">
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
                <div className="order-7 md:order-none md:col-span-2 row-span-1 bg-darkGrey text-white text-center py-8">
                    <h4 className="font-bold mb-3">Dodatne informacije</h4>
                    <p>D.Š.: 51123924</p>
                    <p>TRR: SI56 0313 8100 0034 288</p>
                    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 mt-4">
                        <div className="flex items-center text-white">
                            <PhoneIcon className="h-4 w-4 mr-2" />
                            <p>+386 41 855 924</p>
                        </div>
                        <div className="flex items-center text-white">
                            <AtSymbolIcon className="h-4 w-4 mr-2" />
                            <p>info.kvrp.kranj@gmail.com</p>
                        </div>
                        <div className="flex items-center text-white">
                            <HomeIcon className="h-4 w-4 mr-2" />
                            <p className="text-center">
                                Vidmarjeva 3, Kranj Slovenija
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Klub
