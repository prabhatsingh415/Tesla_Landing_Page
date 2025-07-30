import {useEffect, useState} from "react";


function useMediaQuery(width) {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= width);

    useEffect(() => {
        const handelResize = () => {
            setIsDesktop(window.innerWidth >= width);
        }

        window.addEventListener("resize", handelResize);
        return () => window.removeEventListener("resize", handelResize);

    }, [width])

    return isDesktop;
}

export default useMediaQuery;