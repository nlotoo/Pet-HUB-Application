import { useNavigate } from 'react-router-dom'
import './aboutUs.css'

import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'



const AboutUsPage = () => {



    // const isMobile = useMediaQuery({ query: '(max-width: 415px)' })
    // const isTablet = useMediaQuery({ query: '(max-width: 821px)' })
    // const isDesktopOrLaptop = useMediaQuery({ query: '(max-width: 1224px)' })

    // let resolutionModel = () => {
    //     if (isMobile) {
    //         console.log('(max-width: 415px)')
    //         return '-mobile'
    //     } else if (isTablet) {
    //         console.log('(max-width: 821px)')
    //         return '-tablet'
    //     } else if (isDesktopOrLaptop) {
    //         console.log('(max-width: 1224px)')
    //         return ''
    //     }

    // }

    console.log(resolutionModel())
    // console.log(isMobile, 'is 724px')
    return (
        <div className={`root-card-class${resolutionModel()}`}>
            <div className={`our-story-text${resolutionModel()}`}>
                <p className={`our-story-heading${resolutionModel()}`}>Our Story</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>

            </div>

            <div className='our-story-img' >

                <img className='image-in-card' height={460} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

            </div>


        </div >

    )
}

export default AboutUsPage