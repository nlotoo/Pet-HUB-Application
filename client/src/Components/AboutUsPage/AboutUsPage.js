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
        <div className='login-card-wraper'>
            <div className="site-card-border-less-wrapper">
                <Image className='image-in-card' width={825} height={550} src={'https://advice.cdn.betterhelp.com/cro-people-who-love-animals-more-than-people-psychology-of-empathy-4.jpg'} />

                <Card className='about-us-card' title="Our Story" bordered={false} style={{ width: 500, height: 550 }}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et ea, libero distinctio pariatur soluta laudantium harum optio eaque voluptatum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit. Consequatur praesentium perferendis quasi voluptates. Temporibus perspiciatis quos soluta sit placeat quibusdam quisquam. Provident est animi voluptatum fugit, non ipsam praesentium ut, deserunt suscipit sint saepe alias dignissimos ipsa, voluptates officia nesciunt repudiandae repellat commodi? Odit molestiae excepturi, illo facilis repellat amet? Ab obcaecati officia est rem sapiente laboriosam hic.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, nemo repudiandae. Possimus maiores natus saepe illum esse rem dolor quas?</p>
                    <div className='button-in-about-us-page'>
                        <div>
                            <Button onClick={aboutButton} type="primary" size={'large'} className='card-button-contact-us' >
                                Contact us
                            </Button>
                        </div>
                        <div className='card-button-register'>
                            <Button onClick={signInButton} type="primary" size={'large'}  >
                                Sign up
                            </Button>
                        </div>
                    </div>

                </Card>
            </div>
        </div>
    )
}

export default AboutUsPage