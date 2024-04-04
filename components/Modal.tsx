// components/Modal.tsx
'use client'
import Image from 'next/image'
import React from 'react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc: string
    imageAlt: string
    imageHeight: number
    imageWidth: number
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    imageSrc,
    imageAlt,
    imageHeight,
    imageWidth,
}) => {
    if (!isOpen) return null

    const maxWidth = Math.min(window.innerWidth * 0.9, imageWidth)
    const maxHeight = Math.min(window.innerHeight * 0.9, imageHeight)

    return (
        <div className="fixed  top-0 left-0 w-full h-full bg-dark bg-opacity-85 flex items-center justify-center z-50">
            <div className=" max-w-2xl w-full   p-2 rounded-lg shadow-lg">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    style={{
                        maxWidth: `${maxWidth}px`,
                        maxHeight: `${maxHeight}px`,
                    }}
                    className="w-full h-full object-cover mx-auto"
                />
                <button
                    className="absolute p-1 top-4 right-4 bg-dark rounded-full text-alertOrange"
                    onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Modal
