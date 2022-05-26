import './aboutUs.css'
import useResponsiveDesign from '../../services/useResposiveDisplayTool'

const AboutUsPage = () => {

    return (
        <div className={`root-card-class${useResponsiveDesign()}`}>
            <div className={`our-story-text${useResponsiveDesign()}`}>
                <p className={`our-story-heading${useResponsiveDesign()}`}>Our Story</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.</p>

            </div>

            <div className='our-story-img' >

                <img className='image-in-card' alt='our-story-img' height={460} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

            </div>


        </div >

    )
}

export default AboutUsPage