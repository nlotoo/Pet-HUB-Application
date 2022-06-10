import '../HomePage/homepage.css'
import { useState } from 'react'

const HomePage = () => {

    let [mainImage, setMainImage] = useState("https://wallpaperaccess.com/full/463527.jpg")


    const advetiseSlider = () => {

        fetch('https://dog.ceo/api/breed/pekinese/images/random')
            .then(res => res.json())
            .then(dogImageResponce => {
                setMainImage(dogImageResponce.message)
            })
    }


    return (

        <div className="wrapper">
            <div className="container">
                <div className="inside-container">
                    <h3>Wellcome our hub !</h3>

                    <div className="dog-image"> <img src={mainImage}></img></div>
                    <button onClick={advetiseSlider}>Click me!</button>
                </div>
            </div>
        </div>
    )
}
export default HomePage

