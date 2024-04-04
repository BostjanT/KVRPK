'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/Modal'
import { ImageG } from '@/types/types'
import { gallery } from './images' // Correct import

interface MasonryGalleryProps {
    images: ImageG[]
}

const MasonryGallery = ({ images }: MasonryGalleryProps) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [selectedImage, setSelectedImage] = useState<ImageG | null>(null)

    const openModal = (image: ImageG) => {
        setSelectedImage(image)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedImage(null)
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-10 max-w-6xl mx-auto">
            {gallery.map((image) => (
                <Image
                    key={image.index}
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="cursor-pointer w-60 h-60 object-cover object-center rounded-md"
                    onClick={() => openModal(image)}
                />
            ))}
            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                imageSrc={selectedImage?.src || ''}
                imageAlt={selectedImage?.alt || ''}
                imageHeight={selectedImage?.height}
                imageWidth={selectedImage?.width}
            />
        </div>
    )
}

export default MasonryGallery
