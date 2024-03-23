import First from '@/public/golden.webp'
import Second from '@/public/portrait_sunrise.webp'
import Third from '@/public/portrait2.webp'
import Fourth from '@/public/pointer.jpg'
import Fifth from '@/public/spaniel.jpg'
import Image from 'next/image'

const Gallery = () => {
    const images = [
        {
            src: First,
            alt: 'gallery image',
            colSpan: 'col-span-2',
            rowSpan: 'row-span-1',
        },
        {
            src: Second,
            alt: 'gallery image',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1',
        },
        {
            src: Third,
            alt: 'gallery image',
            colSpan: 'col-span-2',
            rowSpan: 'row-span-2',
        },
        {
            src: Fourth,
            alt: 'gallery image',
            colSpan: 'col-span-1',
            rowSpan: 'row-span-1',
        },
        {
            src: Fifth,
            alt: 'gallery image',
            colSpan: 'col-span-2',
            rowSpan: 'row-span-1',
        },
    ]
    return (
        <div className="container mx-auto max-w-7xl p-2 md:p-10">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-5 md:grid-rows-2 ">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${image.colSpan} ${image.rowSpan} w-full  overflow-hidden`}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery
