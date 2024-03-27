import Image from 'next/image'
import RescueDogs from '@/public/fourdogs.webp'

const ResevalniPsi = () => {
    return (
        <section className="flex flex-col container px-5 md:px-0 mt-8 mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <div className="bg-hero"></div>

            <div className="flex relative mx-auto items-center w-[1200px] h-[500px] justify-center">
                <Image
                    src={RescueDogs}
                    alt="four dogs with maountains in background"
                    className="w-full h-full rounded-md object-center"
                />
                <div className="absolute inset-0 bg-darkGrey opacity-30"></div>
                <div className="absolute -bottom-20 bg-darkGrey w-3/4 max-h-2/5 py-10 mx-auto text-center rounded-lg text-whiter shadow-xl shadow-dark">
                    <h2 className="mb-8 text-whiter">Reševalni psi</h2>
                    <p className="max-w-xl px-4 mx-auto mb-8">
                        Za reševalnega psa so najbolj primerne pasme srednje
                        velikosti, psi morajo biti v dobri telesni kondiciji, po
                        naravi umirjeni ter psihično stabilni. Ti psi ne smejo
                        biti agresivni do ljudi in drugih živali
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ResevalniPsi
