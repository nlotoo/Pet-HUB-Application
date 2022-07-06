import '../HomePage/homepage.css';
import ImageSlider from '../../AdditionalComponents/SlideShowHomePage/SlideShow';



const HomePage = () => {


    return (

        <div className="wrapper">
            <div className="container">
                <h3>Wellcome in our hub ! </h3>
                <div className="inside-container">
                    <ImageSlider />
                </div>
            </div>
        </div>
    );
};
export default HomePage;

