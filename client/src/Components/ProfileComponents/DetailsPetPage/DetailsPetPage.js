import { Link, useParams } from "react-router-dom";
import './pet-detail-card.css'

const DetailsPetPage = () => {

    let { id } = useParams()

    return (
        <div className="root-element">
            <div className="pet-card-wrapper">
                <div className="details-pet-card">
                    <h2>Pet detail</h2>
                    <h5>Pet name</h5>
                    <img className='imgs-details-page' alt='pet-details-img' src="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg" ></img>
                    <div>
                        <label>Pet breed</label>
                        <p>pekingese</p>
                    </div>
                    <div>
                        <label>Pet age</label>
                        <p>pekingese</p>
                    </div>
                    <div>
                        <label>Pet info</label>
                        <p>pekingese</p>
                    </div>
                    <div className="button-bar">
                        <Link to={'/pet-edit/' + id} className='card-button'>Edit</Link>
                        <Link to={'pet-delete/' + id} className='card-button'>Like</Link>
                    </div>
                    <div className="icon-bar">
                        <i class="fa-solid fa-heart-circle-plus"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                </div>


            </div>
        </div >)



};

export default DetailsPetPage;