import Slika1 from '@/public/fourdogs.webp'
import Slika2 from '@/public/golden1.webp'
import Slika3 from '@/public/golden_forest.jpg'
import Slika4 from '@/public/iskalna_akcija.jpg'
import Slika5 from '@/public/pointer.jpg'
import Slika6 from '@/public/spaniel.jpg'
import Slika7 from '@/public/skupinska.jpg'
import Slika8 from '@/public/svetovno_iskanje.jpg'
import Image from 'next/image'

const Galerija = () => {
    const images = [
        Slika1,
        Slika2,
        Slika3,
        Slika4,
        Slika5,
        Slika6,
        Slika7,
        Slika8,
    ]

    const getRandomSize = () => {
        const sizes = ['h-48', 'h-64', 'h-80', 'h-96', 'h-112']
        return sizes[Math.floor(Math.random() * sizes.length)]
    }

    return (
        <section className="flex flex-col container px-5 md:px-0 bg-whiter max-w-8xl mt-8  mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <div className="bg-hero"></div>
            <h2 className="mb-8">galerija</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden bg-gray-200 rounded-md shadow-md ${getRandomSize()} `}>
                        <Image
                            src={image}
                            alt={'gallery image'}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Galerija
