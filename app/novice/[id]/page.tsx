import novice from '@/public/news.json'
import { notFound } from 'next/navigation'
import Image from 'next/image'

const NewsPage = ({ id }: { id: number }) => {
    const news = novice.vnosi
    const singleNews = news.filter((item) => item.id === id)

    if (singleNews.length === 0) {
        notFound()
        return null // Return null or handle the case when news is not found
    }

    const matchNews = singleNews[0]

    return (
        <div className="block max-w-md rounded-lg bg-whiter shadow-lg shadow-shadows text-dark">
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <Image
                    className="rounded-t-lg max-h-40 object-cover"
                    src={matchNews.slika}
                    width={matchNews.width}
                    height={matchNews.height}
                    alt="slika iz novice"
                />
            </div>
            <div className="p-6 text-surface text-dark">
                <h5 className="mb-2 text-xl font-medium leading-tight ">
                    {matchNews.naslov}
                </h5>
                <div className="flex flex-col md:flex-row mt-4 mb-2 md:space-x-8 uppercase">
                    <p>{matchNews.datum}</p>
                    <p>{matchNews.tip}</p>
                </div>
                <p className="mb-4 text-base ">{matchNews.vsebina}</p>
            </div>
        </div>
    )
}

export default NewsPage
