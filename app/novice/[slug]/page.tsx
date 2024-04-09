import novice from '@/public/news.json'
import { notFound } from 'next/navigation'
import Image from 'next/image'

/* export const generateStaticParams = () => {
    const news = novice.vnosi
    return news.map((news: any) => ({ news }))
}

export const generateMetadata = () => {
    const news = novice.vnosi
    if (!news) {
        notFound()
    }
    return {
        news,
    }
} */

type NewsPageProps = {
    id: number
    naslov: string
    datum: string
    vsebina: string
    tip: string
    slika: string
    width: number
    height: number
}[]

const NewsPage = ({
    params: { slug },
}: {
    params: { slug: NewsPageProps }
}) => {
    const news = slug
    console.log('from slug article', slug)

    if (news.length === 0) {
        notFound()
        return null
    }

    return (
        <div className="block max-w-md rounded-lg bg-whiter shadow-lg shadow-shadows text-dark">
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <Image
                    className="rounded-t-lg max-h-40 object-cover"
                    src={news.slika}
                    width={news.width}
                    height={news.height}
                    alt="slika iz novice"
                />
            </div>
            <div className="p-6 text-surface text-dark">
                <h5 className="mb-2 text-xl font-medium leading-tight ">
                    {news.naslov}
                </h5>
                <div className="flex flex-col md:flex-row mt-4 mb-2 md:space-x-8 uppercase">
                    <p>{news.datum}</p>
                    <p>{news.tip}</p>
                </div>
                <p className="mb-4 text-base ">{news.vsebina}</p>
            </div>
        </div>
    )
}

export default NewsPage
