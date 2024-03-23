import Image1 from '@/public/golden1.webp'
import Image2 from '@/public/heroimage.webp'
import Image3 from '@/public/pointer.jpg'
import SingleNews from './SingleNews'
import { StaticImageData } from 'next/image'

type HomeNewsProps = {
    url: StaticImageData
    title: string
    text: string
}[]

const HomeNews = () => {
    const news: HomeNewsProps = [
        {
            url: Image1,
            title: 'Iskalna akcija',
            text: 'Iskanje pogrešanih oseb v ruševinah s pomočjo reševalnih psov je ključnega pomena pri odzivanju na naravne nesreče, kot so potresi, plazovi ali eksplozije, ki povzročijo velike ruševine. Reševalni psi, usposobljeni za delo v takšnih ekstremnih ',
        },
        {
            url: Image2,
            title: 'Predstavitev dela',
            text: 'Iskanje pogrešanih oseb v ruševinah s pomočjo reševalnih psov je ključnega pomena pri odzivanju na naravne nesreče, kot so potresi, plazovi ali eksplozije, ki povzročijo velike ruševine. Reševalni psi, usposobljeni za delo v takšnih ekstremnih ',
        },
        {
            url: Image3,
            title: 'Dan Civilne Zaščite',
            text: 'Iskanje pogrešanih oseb v ruševinah s pomočjo reševalnih psov je ključnega pomena pri odzivanju na naravne nesreče, kot so potresi, plazovi ali eksplozije, ki povzročijo velike ruševine. Reševalni psi, usposobljeni za delo v takšnih ekstremnih ',
        },
    ]
    return (
        <section className="my-4 md:my-12 p-6">
            <h2 className="mb-6 mt-4 md:mt-12">Novice</h2>
            <div className="flex flex-col items-center max-w-full md:max-w-6xl mx-auto text-dark mb-4 md:flex-row md:space-x-8 md:mb-0">
                {news.map((news, index) => (
                    <SingleNews
                        url={news.url}
                        key={index}
                        title={news.title}
                        text={news.text}
                    />
                ))}
            </div>
        </section>
    )
}

export default HomeNews
