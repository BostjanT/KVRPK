import MyGallery from '@/components/Galerry'
import { pictures } from './images'
const Gallery = () => {
    return (
        <section className="container md:max-w-5xl mb-8 md:my-8 md:px-2 mx-auto min-h-screen shadow-xl shadow-darkGrey relative">
            <h2>galerija</h2>
            <MyGallery images={pictures} />
        </section>
    )
}

export default Gallery
