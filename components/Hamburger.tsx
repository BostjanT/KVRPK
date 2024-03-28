import { useState } from 'react'
import Navigation from './Navigation'

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen((prev) => !prev)
    return (
        <>
            {isOpen ? (
                <div className="fixed w-full h-[100vh] bg-lightBlue overflow-y-auto top-4 bottom-0 left-0 z-50">
                    <div className="mb-8">
                        <button onClick={toggle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
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
                    <Navigation />
                </div>
            ) : (
                <button onClick={toggle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            )}
        </>
    )
}
export default Hamburger
