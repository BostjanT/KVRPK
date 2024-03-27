'use client'

import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // if the user scrolls down, show the button
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false)
        }
        // listen for scroll events
        window.addEventListener('scroll', toggleVisibility)

        // clear the listener on component unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    // handles the animation when scrolling to the top
    const scrollToTop = () => {
        isVisible &&
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
    }

    return (
        <button
            className={`fixed bottom-4 right-4 rounded-full p-2 outline-none border bg-alertOrange  transition-opacity duration-200 hover:scale-105  ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={scrollToTop}>
            <ChevronUpIcon className="rounded-full text-white w-6 h-6 md:w-10 md:h-10" />
        </button>
    )
}

export default ScrollToTopButton
