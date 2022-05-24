import { Card, Image, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import './aboutUs.css'

const AboutUsPage = () => {

    const navigate = useNavigate()
    const aboutButton = () => {
        navigate('contact-us')
    }
    const signInButton = () => {
        navigate('/sign-up')
    }

    return (
        <div className='root-card-class'>
            <div className='our-story-text'>
                <p className='our-story-heading'>Our Story</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>

            </div>

            <div className='our-story-img' >

                <img className='image-in-card' width={725} height={450} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

            </div>


        </div>

    )
}

export default AboutUsPage