import React, { useEffect, useState } from 'react'

const useWindowSize = (size) => {
    const [onSmallScreen, setOnSmallScreen] = useState(false)


    useEffect(()=>{
        const checkScreenSize = () => {
            setOnSmallScreen(window.innerWidth < size)
        }

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    },[size])

    return onSmallScreen;
}

export default useWindowSize;
