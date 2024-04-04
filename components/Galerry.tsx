// components/Gallery.tsx

'use client'
import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'

interface GalleryProps {
    images: {
        src: string
        thumbnailWidth?: number
        thumbnailHeight?: number
        height: number
        width: number
    }[]
}

const MyGallery: React.FC<GalleryProps> = ({ images }) => {
    const [lightboxIsOpen, setLightboxIsOpen] = useState<boolean>(false)
    const [currentImage, setCurrentImage] = useState<number>(0)

    const galleryImages = images.map((image) => ({
        ...image,
        thumbnailWidth: image.thumbnailWidth || 320, //
        thumbnailHeight: image.thumbnailHeight || 212, //
    }))

    const openLightbox = (index: number) => {
        setCurrentImage(index)
        setLightboxIsOpen(true)
    }

    const closeLightbox = () => {
        setCurrentImage(0)
        setLightboxIsOpen(false)
    }

    return (
        <>
            <Gallery images={galleryImages} enableImageSelection={false} />
        </>
    )
}

export default MyGallery
