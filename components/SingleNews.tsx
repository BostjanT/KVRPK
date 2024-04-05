import Image from 'next/image'
import Link from 'next/link'

type SingleNews = {
    id?: number
    url: string
    title: string
    text: string
    width: number
    height: number
}
const SingleNews = ({ id, url, title, text, width, height }: SingleNews) => {
    return (
        <div className="block max-w-md rounded-lg  bg-whiter shadow-lg shadow-shadows text-dark my-4 md:my-0">
            <div
                className="relative overflow-hidden bg-cover bg-no-repeat"
                data-twe-ripple-init
                data-twe-ripple-color="light">
                <Image
                    className="rounded-t-lg max-h-40 object-cover"
                    src={url}
                    alt=""
                    width={width}
                    height={height}
                />
                <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div className="p-6 text-surface text-dark">
                <h5 className="mb-2 text-xl font-medium leading-tight ">
                    {title}
                </h5>
                <p className="mb-4 text-base line-clamp-4">{text}</p>
                <Link href={`/novice/${id}`}>
                    <button
                        type="button"
                        className="inline-block rounded bg-lightBlue px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:shadow-md hover:shadow-darkGrey hover:scale-105 focus:bg-primary-accent-300 "
                        data-twe-ripple-init
                        data-twe-ripple-color="light">
                        Več ...
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default SingleNews
