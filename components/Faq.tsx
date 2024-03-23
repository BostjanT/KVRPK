import Image from 'next/image'
import Question from '@/public/question.png'
import Asking2 from '@/public/faq1.webp'
type Faqs = {
    tab: number
    question: string
    answer: string
}[]
const Faq = () => {
    const faqs: Faqs = [
        {
            tab: 1,
            question: 'Moj pes zelo voha po tleh. Ali bi bil dober reševalec?',
            answer: 'Vaš pes je top izbira za delo',
        },
        {
            tab: 2,
            question: 'Katera pasma je najbolj primerna za delo?',
            answer: 'Najbolj primerne pasme so tiste, ki imajo že nek lovski nagon v sebi. Psi srednje rasti, itd...',
        },
        {
            tab: 3,
            question:
                'Kdo sproži iskalno akcijo ter koga se pravzaprav lahko išče?',
            answer: 'Iskalno akcijo sproži pristojni organ, Policija. Iščemo vse pogrešane osebe, ne glede na startost, spol, zdravstveno stanje...',
        },
        {
            tab: 4,
            question:
                'Ali pred iskanjem date psiom kaj za povohati od pogrešane osebe?',
            answer: 'Pogosto se tega ne poslužujemo, saj so naši psi naučeni splošnega iskanja. Dotičnega načina iskanja se poslužujejo kolegi  mantrailerji',
        },
    ]
    return (
        <section id="faq" className="md:mt-40 mb-8 bg-darkGrey pt-8 relative ">
            <div className="container mx-auto  ">
                <Image
                    src={Question}
                    width={240}
                    className="absolute hidden max-w-[22rem] h-80 lg:block top-20 left-10 rounded-md"
                    alt="kids asking faq"
                />
                <Image
                    src={Asking2}
                    width={170}
                    className="absolute hidden lg:block  w-40 -top-20 right-5 rounded-full shadow-lg  drop-shadow "
                    alt="kids asking faq"
                />

                <h2 className="mb-6 text-3xl font-semibold text-center text-whiter md:text-4xl">
                    Pogosto zastavljena vprašanja
                </h2>
                <p className="max-w-lg px-6 mx-auto text-center text-white">
                    Za vas smo izbrali nekaj najbolj pogosto zastavljenih
                    vprašanj, ki jih vodniki dobimo ob predstavitvah našega
                    dela.
                </p>
            </div>

            {/* <!-- Main Container --> */}
            <div className="container mx-auto px-6 pb-12">
                {/* <!-- Accordion Container --> */}
                <div className="max-w-2xl m-8 mx-auto overflow-hidden">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="py-1 outline-none group"
                            tabIndex={faq.tab}>
                            {/* <!-- Tab Flex Container --> */}
                            <div className="flex items-center justify-between py-3 text-white transition duration-500 cursor-pointer group ease">
                                {/* <!-- Tab Title --> */}
                                <div className=" font-semibold transition duration-500 ease group-hover:text-alertOrange">
                                    {faq.question}
                                </div>
                                {/* <!-- Arrow --> */}
                                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-alertOrange">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="12">
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            d="M1 1l8 8 8-8"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* <!-- Tab Inner Content --> */}
                            <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                                <p className="py-2 text-justify text-whiter">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
