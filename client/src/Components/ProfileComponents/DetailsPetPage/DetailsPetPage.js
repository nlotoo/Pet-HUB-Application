import { Link, useParams } from "react-router-dom";
import './pet-detail-card.css';
import { useFetch } from '../../../services/useFetch';
import LoadingSpinner from "../../AdditionalComponents/LoadingSpinner/LoadingSpinner";
const DetailsPetPage = () => {

    let { id } = useParams();
    const url = `http://localhost:5000/pet-details/${id}`;

    const { data, error, loading } = useFetch(url);
    if (error) {
        console.log(error);
    };

    return (


        < div className="root-element" >
            <div className="pet-card-wrapper">
                <div className="details-pet-card">
                    {loading ? <LoadingSpinner /> : ''}
                    <h2 className="heading-class" >Pet detail</h2>
                    <h5>{data?.petName} </h5>
                    <img className='imgs-details-page' alt='pet-details-img' src={`${data?.petPhoto}`} ></img>
                    <div className="pet-info">
                        <div>Pet breed</div>
                        <p>{data?.petBreed}</p>
                    </div>
                    <div className="pet-info">
                        <div>Pet age</div>
                        <p>{data?.petAge}</p>
                    </div>
                    <div className="pet-info">
                        <div>Pet info</div>
                        <p>{data?.petInfo} Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, totam?</p>
                    </div>
                    <div className="button-bar">
                        <Link to={'/pet-edit/' + id} className='card-button'>Edit</Link>
                        <Link to={'pet-delete/' + id} className='card-button'>Like</Link>
                    </div>
                    <div className="icon-bar">
                        <i className="fa-solid fa-heart-circle-plus"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>


            </div>
        </div >
    );



};

export default DetailsPetPage;