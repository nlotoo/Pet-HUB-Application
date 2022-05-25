import { useNavigate } from 'react-router-dom'
import './aboutUs.css'

import { useMediaQuery } from 'react-responsive'



const AboutUsPage = () => {

    const navigate = useNavigate()

    const isDesktopOrLaptop = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 415px)' })
    console.log(isDesktopOrLaptop, 'is 414')
    console.log(isMobile, 'is 724px')
    return (
        <div className={isMobile ? 'root-card-class-mobile' : 'root-card-class'}>
            <div className={isMobile ? 'our-story-text-mobile' : 'our-story-text'}>
                <p className={isMobile ? 'our-story-heading-mobile' : 'our-story-heading'}>Our Story</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>

            </div>

            <div className='our-story-img' >

                <img className='image-in-card' height={560} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

            </div>


        </div >

    )
}

export default AboutUsPage