'use client'

import { Fragment } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Tab } from '@headlessui/react'

import TabImage01 from '@/public/spaniel.jpg'
import Tab0Image2 from '@/public/pointer.jpg'
import Tab0Image3 from '@/public/golden.webp'

interface Tab {
    title: string
    img: StaticImageData

    excerpt: string
    link: string
}

export default function Tabs() {
    const tabs: Tab[] = [
        {
            title: 'Iskanje v naravi',
            img: TabImage01,
            excerpt:
                'Iskanje pogrešanih oseb v naravi predstavlja eno izmed najbolj zahtevnih nalog za reševalne ekipe po vsem svetu. Ne le da teren pogosto prinaša težavno dostopne in nevarne predele, tudi čas je v takšnih situacijah izjemno pomemben faktor. Iskanje začnejo takoj po prejetju obvestila o izgubljeni osebi. Najprej se zberejo vse razpoložljive informacije o pogrešani osebi in okoliščinah izginotja. To vključuje zadnjo znano lokacijo, čas, ko je bila oseba nazadnje videna, fizično kondicijo, opremo, ki jo ima pri sebi, in morebitne zdravstvene težave. V procesu iskanja igrajo ključno vlogo tudi reševalni psi. S svojim izjemnim vohom so sposobni zaznati človeški vonj tudi v najbolj zahtevnih pogojih in na velikih razdaljah. Njihova uporaba je še posebej učinkovita v začetnih fazah iskanja, ko je čas najbolj kritičen.',
            link: '#0',
        },
        {
            title: 'Iskanje v ruševini',
            img: Tab0Image2,

            excerpt:
                'Iskanje pogrešanih oseb v ruševinah s pomočjo reševalnih psov je ključnega pomena pri odzivanju na naravne nesreče, kot so potresi, plazovi ali eksplozije, ki povzročijo velike ruševine. Reševalni psi, usposobljeni za delo v takšnih ekstremnih razmerah, so neprecenljivi zaradi svoje sposobnosti, da zaznajo človeški vonj pod tonami ruševin. Uspeh takšnih operacij močno zavisi od hitrosti odziva, saj so prve ure po nesreči ključne za preživetje ujetih oseb. Reševalni psi so zaradi svoje agilnosti in sposobnosti navigacije skozi ozke prehode v ruševinah nepogrešljivi, kar človeškim reševalcem omogoča, da svoje vire usmerijo bolj učinkovito.',
            link: '#0',
        },
        {
            title: 'Iskanje v snegu',
            img: Tab0Image3,

            excerpt:
                'Iskanje zasutih v snegu je ena izmed najbolj zahtevnih reševalnih operacij, kjer reševalni psi igrajo ključno vlogo. Te izjemne živali, usposobljene za delo v ekstremnih zimskih razmerah, lahko s svojim izostrenim vohom hitro zaznajo prisotnost človeka pod snežnimi plazovi, kjer je vsaka sekunda pomembna za preživetje zasutih. Ko se zgodi nesreča, reševalne ekipe skupaj s psi nemudoma odhitijo na prizorišče. Psi, ki so izurjeni za iskanje v snegu, se sistematično lotijo preiskovanja območja, njihova naloga je, da čim hitreje najdejo zasute ljudi. Njihova sposobnost, da delajo v težkih vremenskih pogojih in na zahtevnem terenu, kjer bi človeški reševalci potrebovali veliko več časa, je neprecenljiva.',
            link: '#0',
        },
    ]

    return (
        <Tab.Group>
            {({ selectedIndex }) => (
                <div className="mt-12 mx-2 pb-8 pt-4 md:mt-40 md:mb-12 z-0  text-white  md:pb-12">
                    <h2>delo reševalnih psov</h2>
                    {/* Buttons */}
                    <div className="flex justify-center mt-6">
                        <Tab.List className="flex flex-col md:flex-row justify-center text-white rounded-[20px] p-1 mb-4 md:mb-8 ">
                            {tabs.map((tab, index) => (
                                <Tab key={index} as={Fragment}>
                                    <button
                                        className={`flex items-center justify-center text-sm w-auto font-medium h-8 px-4 mx-1 my-1 rounded-2xl  focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-250 ease-in-out ${
                                            selectedIndex === index
                                                ? 'bg-lightBlue text-darkGrey'
                                                : ' border-solid border-2 border-dark text-dark '
                                        }}`}>
                                        {tab.title}
                                    </button>
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>

                    {/* Tab panels */}
                    <Tab.Panels className="max-w-md mx-auto relative md:max-w-3xl">
                        <div className="bg-tabs"></div>

                        <div className="relative flex flex-col">
                            {tabs.map((tab, index) => (
                                <Tab.Panel key={index} as={Fragment}>
                                    <article className="w-full bg-darkGrey font-whiter rounded-2xl shadow-xl shadow-darkGrey flex flex-col md:flex-row items-stretch justify-between px-1 focus-visible:outline-none focus-visible:ring">
                                        <figure className="w-full]md:w-1/2 p-2">
                                            <Image
                                                className="w-full h-[180px] min-[480px]:h-[320px] object-cover rounded-lg"
                                                height="420"
                                                src={tab.img}
                                                alt={tab.title}
                                            />
                                        </figure>
                                        <div className="w-full md:w-1/2 flex flex-col justify-center p-5 pl-3">
                                            <div className="flex justify-between mb-1">
                                                <header>
                                                    <h1 className="text-xl font-bold ">
                                                        {tab.title}
                                                    </h1>
                                                </header>
                                            </div>
                                            <div className=" text-sm line-clamp-6 mb-2">
                                                {tab.excerpt}
                                            </div>
                                        </div>
                                    </article>
                                </Tab.Panel>
                            ))}
                        </div>
                    </Tab.Panels>
                </div>
            )}
        </Tab.Group>
    )
}
