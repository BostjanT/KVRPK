// components/CustomPopup.tsx
import Image from 'next/image'
import React from 'react'

interface CustomPopupProps {
    imageUrl: string
    onClose: () => void
}

const CustomPopup: React.FC<CustomPopupProps> = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="max-w-screen-md w-full bg-white p-8 rounded-lg">
                <Image
                    src={imageUrl}
                    alt="Full size"
                    className="w-full h-auto"
                />
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none">
                    <svg
                        className="w-6 h-6"
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

export default CustomPopup
