import SingleNews from './SingleNews'
import novice from '@/public/news.json'

type HomeNews = {
    id: number
    naslov: string
    datum: string
    vsebina: string
    tip: string
    slika: string
    width: number
    height: number
}[]

const HomeNews = () => {
    const news: HomeNews = novice.vnosi
    const latestThree = news.slice(0, 3)

    return (
        <section className="my-4 md:my-12 p-2 md:p-6 md:relative">
            <h2 className="mb-6 mt-4 md:mt-12">Novice</h2>
            <div className="flex flex-col items-center max-w-full md:max-w-6xl mx-auto text-dark mb-4 md:flex-row md:space-x-8 md:mb-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4  mx-auto ">
                    <div className="hidden md:block border-y-8 border-alertOrange absolute top-72 w-screen left-0 -z-10 h-20"></div>
                    {latestThree.map((news) => (
                        <SingleNews
                            url={news.slika}
                            key={news.id}
                            title={news.naslov}
                            text={news.vsebina}
                            width={news.width}
                            height={news.height}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HomeNews
