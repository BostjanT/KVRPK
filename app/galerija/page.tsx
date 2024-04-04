import MyGallery from '@/components/Galerry'
import { images } from './images'
const Gallery = () => {
    return (
        <section className="container md:max-w-5xl md:px-0 mb-8 md:my-8  mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <MyGallery images={images} />
        </section>
    )
}

export default Gallery
