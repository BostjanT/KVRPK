import novice from '@/public/news.json'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import SingleNews from '@/components/SingleNews'

interface NewsItem {
    id: number
    naslov: string
    datum: string
    vsebina: string
    tip: string
    slika: string
    width: number
    height: number
}

const NewsPage = ({ params: { id } }: { params: { id: number } }) => {
    const news = novice.vnosi[id - 1]

    return (
        <section className="flex flex-col items-center justify-center px-5 md:px-0 bg-whiter mb-0 mx-auto relative min-h-[63vh]">
            <div className="hidden md:block border-y-8 border-alertOrange absolute top-50 w-screen left-0  h-20"></div>
            <div className="z-50 grid grid-cols-1 items-center md:grid-cols-2 max-w-4xl my-12 rounded-lg bg-whiter shadow-lg shadow-shadows text-dark">
                <Image
                    className="max-h-auto object-cover"
                    src={news.slika}
                    width={news.width}
                    height={news.height}
                    alt="slika iz novice"
                />

                <div className="p-6 text-surface text-dark">
                    <h5 className="mb-2 text-xl font-medium leading-tight ">
                        {news.naslov}
                    </h5>
                    <div className="flex flex-col md:flex-row mt-4 mb-2 md:space-x-8 uppercase">
                        <p>{news.datum}</p>
                    </div>
                    <p className="mt-4 text-base">{news.vsebina}</p>
                </div>
            </div>
        </section>
    )
}

export default NewsPage
