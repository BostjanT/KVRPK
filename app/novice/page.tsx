'use client'
import SingleNews from '@/components/SingleNews'
import novice from '@/public/news.json'
import { useState } from 'react'

import ReactPaginate from 'react-paginate'

const ITEMS_PER_PAGE = 6
const Novice = () => {
    const news = novice.vnosi
    const [currentPage, setCurrentPage] = useState<number>(0)

    const pageCount = Math.ceil(news.length / ITEMS_PER_PAGE)

    const handlePageClick = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    const paginatedNews = news.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    )

    return (
        <section className="flex flex-col container px-5 md:px-0 bg-whiter mb-0 mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <>
                <div className="bg-hero"></div>
                <h2 className="my-8">novice</h2>
            </>
            <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 md:gap-8 mb-10">
                {paginatedNews.map((news: any) => {
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
            <div className="flex items-center justify-center">
                <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    activeClassName="active"
                    previousLabel="NAZAJ"
                    nextLabel="NASLEDNJA"
                />
            </div>
        </section>
    )
}

export default Novice
