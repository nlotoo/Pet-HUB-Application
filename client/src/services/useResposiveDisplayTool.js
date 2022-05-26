



import { useMediaQuery } from 'react-responsive'

const useResponsiveDesign = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 415px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 821px)' })
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 821px)' })

    console.log(isDesktopOrLaptop)

    if (isMobile) {
        console.log('(max-width: 415px)')
        return '-mobile'
    } else if (isTablet) {
        console.log('(max-width: 821px)')
        return '-tablet'
    } else if (isDesktopOrLaptop) {
        console.log('(max-width: 1224px)')
        return '-desktop'
    }

}

export default useResponsiveDesign