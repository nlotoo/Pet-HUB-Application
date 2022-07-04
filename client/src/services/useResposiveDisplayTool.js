



import { useMediaQuery } from 'react-responsive'

const useResponsiveDesign = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 415px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 821px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 821px)' })



    if (isMobile) {
        // console.log('(max-width: 415px)')
        return 1
    } else if (isTablet) {
        // console.log('(max-width: 821px)')
        return 2
    } else if (isDesktopOrLaptop) {
        // console.log('(max-width: 1224px)')
        return 5
    }

}

export default useResponsiveDesign