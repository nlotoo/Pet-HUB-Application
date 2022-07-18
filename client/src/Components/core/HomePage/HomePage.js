import '../HomePage/homepage.css';

import { useNavigate } from 'react-router-dom';

const HomePage = () => {


    let navigate = useNavigate();

    return (
        <div>

            <div className="container">
                <div className="inside-container">
                    <section className='slider'>
                        <img src='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2020%2F04%2F17%2Fwelsh-corgi-dog-garden-getty-0420.jpg' alt='travel-img' className='image' />


                    </section>
                </div>
                <div className='home-page-text'>
                    <h2>You still can`t find your favorite dog breed! </h2>
                    <h3> Try for free with our online catalog for dogs !</h3>

                    <button className='catalog-button' onClick={() => { navigate('get-all-pets') }} >Our Catalog</button>
                    <button className='catalog-button' onClick={() => { navigate('sign-up') }} >Register</button>

                </div>

            </div>


        </div >
    );
};
export default HomePage;

