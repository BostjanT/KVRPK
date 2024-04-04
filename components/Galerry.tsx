'use client'
import React, { useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Modal from './Modal'
import { pictures } from '@/app/galerija/images'
import ReactPaginate from 'react-paginate'

interface GalleryProps {
    images: {
        src: string
        thumbnailWidth?: number
        thumbnailHeight?: number
        width: number
        height: number
    }[]
}

const ITEMS_PER_PAGE = 16

const MyGallery: React.FC<GalleryProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const openModal = (index: number) => {
        const pictureIndex = currentPage * ITEMS_PER_PAGE + index
        setSelectedImage(pictureIndex)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const pageCount = Math.ceil(pictures.length / ITEMS_PER_PAGE)

    const handlePageClick = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected)
    }

    const paginatedPictures = pictures.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    )

    const galleryImages = paginatedPictures.map((image, index) => ({
        src: image.src,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        width: image.width || 320,
        height: image.height || 212,
    }))

    return (
        <>
            <Gallery
                images={galleryImages}
                enableImageSelection={false}
                onClick={(index) => openModal(index)}
            />

            {selectedImage !== null && (
                <Modal
                    isOpen={true}
                    onClose={closeModal}
                    imageSrc={images[selectedImage].src}
                    imageAlt={`Image ${selectedImage}`}
                    imageHeight={images[selectedImage].height} // Adjust as needed
                    imageWidth={images[selectedImage].width} // Adjust as needed
                />
            )}
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
        </>
    )
}

export default MyGallery
