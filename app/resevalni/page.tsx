import Image from 'next/image'
import RescueDogs from '@/public/fourdogs.webp'
import Iskalna from '@/public/iskalna_akcija.jpg'
import Svetovno from '@/public/svetovno_iskanje.jpg'
import Skupinska from '@/public/skupinska.jpg'
import RescueDogWork from '@/components/RescueDogWork'

const ResevalniPsi = () => {
    return (
        <section className="flex flex-col container bg-whiter md:px-0 mt-4 md:mt-0 mx-auto shadow-xl shadow-darkGrey ">
            <div className="relative">
                <div className="bg-hero"></div>

                <div className="flex flex-col md:relative mx-auto items-center max-w-full h-[500px] justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-darkGrey opacity-65 "></div>
                        <Image
                            src={RescueDogs}
                            alt="four dogs with mountains in background"
                            className="w-full h-full  object-center"
                        />
                    </div>

                    <div className="md:absolute flex flex-col md:-bottom-20 bg-darkGrey max-w-3/4 max-h-2/5 py-10 mx-auto text-center md:rounded-b-lg md:rounded-lg text-whiter shadow-xl md:shadow-dark">
                        <h2 className="mb-8 text-whiter">Reševalni psi</h2>
                        <p className="max-w-xl px-4 mx-auto mb-8">
                            Za reševalnega psa so najbolj primerne pasme srednje
                            velikosti, psi morajo biti v dobri telesni
                            kondiciji, po naravi umirjeni ter psihično stabilni.
                            Ti psi ne smejo biti agresivni do ljudi in drugih
                            živali
                        </p>
                    </div>
                </div>
            </div>
            {/*  PRVI ZAPISI */}
            <div className="flex flex-col mx-auto mt-[3rem] md:mt-[7rem] max-w-3xl px-4 relative ">
                <p className="z-50 md:text-lg">
                    Prvi zapisi o uporabi reševalnega psa segajo v leto 1707, ko
                    menihi švicarskega samostana s svojimi psi pasme bernardinec
                    iščejo in rešujejo obnemogle pohodnike na prelazu St.
                    Bernard. V Sloveniji sta bila pionirja Dušan Škrlep in
                    Marjan Perko, ko leta 1952 v Tamarju organizirata prvi
                    lavisnki tečaj. Prva uspešna reševalna akcija s psi je
                    potekala 25. 2. 1957 na Korošici Ena od kasnejših reševalnih
                    akcij z reševalnim psom steče leta 1983, ko v hrastniškem
                    rudniku blato zalije skupino rudarjev na globini 450m.
                    Reševalna psička Ajda je po napornem enournem spustu in po
                    polurnem iskanju nakazalo mesto trupla ponesrečenega
                    rudarja.
                </p>
            </div>
            {/* GRID PREDSTAVITEV */}
            <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-7xl gap-4 my-6 px-2 md:p-10 mx-auto text-white">
                <div className="bg-darkGrey rounded-md p-4">
                    <h3 className="font-semibold">
                        Znanje vodnika se pridobiva na tečajih in seminarjih,
                        ter preveri z izpiti.
                    </h3>
                    <ol className="mt-4 list-disc list-inside">
                        <li>70 urni tečaj prve pomoči</li>
                        <li> tečaj prve veterinarske pomoči</li>
                        <li> tečaj vrvne tehnike</li>
                        <li>tečaj orientacije</li>
                        <li>tečaj o nevarnosti v gorah</li>
                    </ol>
                </div>
                <div className="bg-darkGrey rounded-md p-4">
                    <h3 className="font-semibold">
                        Usposabljanje vodnika in psa poteka
                    </h3>
                    <ol className="mt-4 list-disc list-inside">
                        <li>tedenske vaje v skupini</li>
                        <li>taborji</li>
                        <li>akcijske vaje</li>
                        <li>lavinski tečaji</li>
                    </ol>
                </div>
                <div className="bg-darkGrey rounded-md p-4">
                    <h3 className="font-semibold">
                        Preverjanje vodnika in psa
                    </h3>
                    <ol className="mt-4 list-disc list-inside">
                        <li>
                            nacionalni izpiti (ruševina, iskanje pogrešanih,
                            lavina, stopnje A in B)
                        </li>
                        <li> mednarodni izpiti</li>
                        <li> tekmovanja in svetovno prvenstvo</li>
                        <p className="mt-3">
                            Vodniki reševalnih psov, ki so uspešni na regijskih
                            preizkušnjah se uvrstijo v intervencijsko enoto in
                            sodelujejo v resničnih akcijah iskanja
                        </p>
                    </ol>
                </div>
            </div>
            {/* TEKST O DELU */}

            <RescueDogWork />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mb-4 ">
                <Image
                    src={Iskalna}
                    alt=""
                    className="h-full w-full object-contain"
                />
                <Image
                    src={Skupinska}
                    alt=""
                    className="h-full w-full object-contain"
                />
                <Image
                    src={Svetovno}
                    alt=""
                    className="h-full w-full object-contain"
                />
            </div>
        </section>
    )
}

export default ResevalniPsi
