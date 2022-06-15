import {useEffect, useState} from "react";

export const useWindowWidth = () => {
    const [breakpoint, setBreakpoint] = useState<number>()
    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        setBreakpoint(window.innerWidth)
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return breakpoint
}
