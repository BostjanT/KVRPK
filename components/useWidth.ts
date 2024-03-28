import { useEffect, useRef, useState } from 'react'

const useWidth = (breakpoint: number) => {
    const [isLower, toggle] = useState(false)
    const [width, setWidth] = useState(0)

    const checkWidth = useRef(() => {})
    checkWidth.current = () => {
        setWidth(window.innerWidth)
        if (window.innerWidth < breakpoint) {
            toggle(true)
        } else {
            toggle(false)
        }
    }

    useEffect(() => {
        checkWidth.current()
        window.addEventListener('resize', checkWidth.current)
        return () => {
            window.removeEventListener('resize', checkWidth.current)
        }
    }, [])

    return { isLower, width }
}

export default useWidth
