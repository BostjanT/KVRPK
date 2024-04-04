'use client'
import Image from 'next/image'
import { images } from './images'
import PhotoAlbum from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'

const Galerija = () => {
    const [index, setIndex] = useState(-1)
    const getRandomSize = () => {
        const sizes = ['h-48', 'h-64', 'h-80', 'h-96', 'h-112']
        return sizes[Math.floor(Math.random() * sizes.length)]
    }

    return (
        <section className="flex flex-col container px-5 md:px-0 bg-whiter max-w-8xl my-8  mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <div className="bg-hero"></div>
            <h2 className="mb-8">galerija</h2>

            {/*   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 [&>img:not(:first-child)]:mt-8"> */}
            <div className="columns-1 space-y-4 md:p-8 sm:columns-2  md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`grid gap-4 relative overflow-hidden bg-gray-200 rounded-md shadow-md min-h-20`}
                        onClick={({ index: current }) => setIndex(current)}>
                        <Image
                            src={image}
                            height={320}
                            alt={'gallery image'}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ))}
                <Lightbox
                    index={index}
                    slides={images}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                />
            </div>
        </section>
    )
}

export default Galerija
