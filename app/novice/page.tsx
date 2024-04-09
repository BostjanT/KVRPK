import SingleNews from '@/components/SingleNews'
import novice from '@/public/news.json'
import Image from 'next/image'

const Novice = () => {
    const news = novice.vnosi

    return (
        <section className="flex flex-col container px-5 md:px-0 bg-whiter mb-0 mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <>
                <div className="bg-hero"></div>
                <h2 className="mb-8">novice</h2>
            </>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 md:gap-8 mb-10">
                {news.map((news: any) => {
                    return (
                        <SingleNews
                            url={news.slika}
                            key={news.id}
                            title={news.naslov}
                            text={news.vsebina}
                            width={news.width}
                            height={news.height}
                            id={news.id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default Novice
