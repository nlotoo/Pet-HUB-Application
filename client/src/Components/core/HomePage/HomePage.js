import '../HomePage/homepage.css';
import ImageSlider from '../../AdditionalComponents/SlideShowHomePage/SlideShow';



const HomePage = () => {


    return (

        <div className="wrapper">
            <div className="container">
                <div className='home-page-text'>
                    <h2>You still can`t find your favorite dog breed! </h2>
                    <h3> Try for free with our online catalog for dogs !</h3>

                   

                </div>
                <div className="inside-container">
                    <ImageSlider />
                </div>
            </div>
        </div>
    );
};
export default HomePage;

