'use client'
import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import CustomPopup from './ImagePopUp'
import Modal from './Modal'

interface GalleryProps {
    images: {
        src: string
        thumbnailWidth?: number
        thumbnailHeight?: number
        width: number
        height: number
    }[]
}

const MyGallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const openModal = (index: number) => {
        setSelectedImage(index)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const galleryImages = images.map((image, index) => ({
        src: image.src,
        thumbnailWidth: image.thumbnailWidth || 320,
        thumbnailHeight: image.thumbnailHeight || 212,
        width: image.width || 320,
        height: image.height || 212,
    }))

    return (
        <>
            <Gallery
                images={galleryImages}
                enableImageSelection={false}
                onClick={(index) => openModal(index)} // Disable image selection
            />
            {selectedImage !== null && (
                <Modal
                    isOpen={true}
                    onClose={closeModal}
                    imageSrc={images[selectedImage].src}
                    imageAlt={`Image ${selectedImage}`}
                    imageHeight={
                        images[selectedImage].thumbnailHeight ||
                        images[selectedImage].height
                    } // Adjust as needed
                    imageWidth={
                        images[selectedImage].thumbnailWidth ||
                        images[selectedImage].width
                    } // Adjust as needed
                />
            )}
        </>
    )
}

export default MyGallery
