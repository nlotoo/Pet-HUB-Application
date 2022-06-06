import './aboutUs.css'
import useResponsiveDesign from '../../services/useResposiveDisplayTool'

const AboutUsPage = () => {

    const aboutUsText = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta culpa adipisci ut error cupiditate quis explicabo harum rem eum tempore, architecto minima exercitationem tempora, deleniti laboriosam cum cumque numquam nemo obcaecati neque quo magni officia. Nobis cum nisi vel et aliquid illo magni animi atque sed fugiat deserunt necessitatibus architecto, libero labore voluptas velit omnis veniam? Ipsum, ducimus consequuntur.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, deleniti alias nemo praesentium ea eligendi et voluptate saepe nihil, amet laborum fugit. Dolor quos unde quis quidem ad impedit odio?']





    return (
        <div className={`root-card-class${useResponsiveDesign()}`}>
            <div className='pets-about-us-wraper'>
                <div className={`our-story-text${useResponsiveDesign()}`}>
                    <p className={`our-story-heading${useResponsiveDesign()}`}>Our Story</p>
                    {aboutUsText ? aboutUsText.map((x, i) => {
                        return (
                            <p key={i + x[10]}>{x}</p>
                        )
                    }) : <div className='loader-wraper'>
                        <div className='loader'></div>
                    </div>}
                </div>
            </div >

            <div className='our-story-img' >

                <img className='image-in-card' alt='our-story-img' height={460} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

            </div>


        </div>

    )
}

export default AboutUsPage