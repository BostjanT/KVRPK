'use client'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import Link from 'next/link'

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="z-30">
            <div className="block md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2">
                    {isOpen ? (
                        <XCircleIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    )}
                </button>
            </div>
            {/*   <Transition
                show={isOpen}
                enter="transition duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition duration-200 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                {(ref) => (
                    <div
                        ref={ref}
                        classNameName="flex flex-col md:hidden items-center justify-center space-y-4 tracking-widest 
                        
                        fixed z-10 inset-0  w-full h-screen  px-6 py-1  uppercase bg-lightBlue
                        ">
                        <Link
                            href="/klub"
                            classNameName="hover:text-darkGrey hover:scale-105">
                            O nas
                        </Link>
                        <Link
                            href="#resevalni"
                            classNameName="hover:text-darkGrey hover:scale-105">
                            Reševalni pes
                        </Link>
                        <Link
                            href="#novice"
                            classNameName="hover:text-darkGrey hover:scale-105">
                            Novice
                        </Link>
                        <Link
                            href="#solanje"
                            classNameName="hover:text-darkGrey hover:scale-105">
                            Šolanje
                        </Link>
                        <Link
                            href="#galerija"
                            classNameName="hover:text-darkGrey hover:scale-105 ">
                            Galerija
                        </Link>
                    </div>
                )}
            </Transition> */}
            {isOpen && (
                <div className="fixed top-14 left-0  md:hidden flex-col items-center self-end w-full h-screen  px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase bg-lightBlue overflow-y-hidden">
                    <div className="w-full py-3 text-center">
                        <Link
                            href="/klub"
                            className="hover:text-darkGrey hover:scale-105">
                            O nas
                        </Link>
                    </div>
                    <div className="w-full py-3 text-center">
                        <Link
                            href="#resevalni"
                            className="hover:text-darkGrey hover:scale-105">
                            Reševalni pes
                        </Link>
                    </div>
                    <div className="w-full py-3 text-center">
                        <Link
                            href="#novice"
                            className="hover:text-darkGrey hover:scale-105">
                            Novice
                        </Link>
                    </div>
                    <div className="w-full py-3 text-center">
                        <Link
                            href="#solanje"
                            className="hover:text-darkGrey hover:scale-105">
                            Šolanje
                        </Link>
                    </div>
                    <div className="w-full py-3 text-center">
                        <Link
                            href="#solanje"
                            className="hover:text-darkGrey hover:scale-105">
                            Galerija
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hamburger
