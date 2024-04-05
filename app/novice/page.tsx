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
                {news.map((news) => {
                    return (
                        <div
                            key={news.id}
                            className="block max-w-md rounded-lg  bg-whiter shadow-lg shadow-shadows text-dark">
                            <div
                                className="relative overflow-hidden bg-cover bg-no-repeat"
                                data-twe-ripple-init
                                data-twe-ripple-color="light">
                                <Image
                                    className="rounded-t-lg max-h-40 object-cover"
                                    src={news.slika}
                                    width={4200}
                                    height={150}
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
                                <p className="mb-4 text-base ">
                                    {news.vsebina}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Novice
