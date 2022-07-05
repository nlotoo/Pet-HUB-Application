import './pet-detail-card.css';
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from '../../../services/useFetch';
import LoadingSpinner from "../../AdditionalComponents/LoadingSpinner/LoadingSpinner";
import { isLiked, unLiked } from '../profile.service';
import { useEffect, useState } from 'react';

const DetailsPetPage = () => {

    let { id } = useParams();
    const navigate = useNavigate();

    const url = `http://localhost:5000/pet-details/${id}`;

    const { data, error, loading } = useFetch(url);
    let userID = localStorage.getItem('User ID');
    let [user, setUser] = useState(null)
    let [like, setLike] = useState(null);
    const itsTrue = data?.petLikes.some(x => x === userID);


    useEffect(() => {
        setUser(userID)
        if (itsTrue) {
            setLike(itsTrue);
        };
        // eslint-disable-next-line
    }, [itsTrue]);

    if (error) {
        console.log(error);
    };

    const LikedPet = (e) => {
        let userData = {
            id, userID,
        };
        isLiked(userData)
            .then(rs => {
                if (rs.message) {
                    setLike(rs.message);
                }
                setLike(true)
            }
            );
    };

    const UnLikedPet = () => {
        let userData = {
            id, userID,
        };
        unLiked(userData);
        setLike(false)




    };

    const urlPetOwner = `http://localhost:5000/user-profile/${data?.petOwner[0]}`;
    let petOwnerName = useFetch(urlPetOwner);
    if (petOwnerName.error) {
        console.log(petOwnerName.error);
    };


    return (
        <div className="root-element" >
            <div className="pet-card-wrapper">
                {loading ? <LoadingSpinner /> : <div className="details-pet-card">
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
                        <div>Pet owner</div>
                        <p>{petOwnerName.data?.username?.slice(0, 1).toUpperCase() + petOwnerName.data?.username?.slice(1)}</p>
                    </div>
                    <div className="pet-info">
                        <div>Pet info</div>
                        <p>{data?.petInfo} </p>
                    </div>
                    <div className="button-bar">
                        {
                            petOwnerName.data?._id === userID ? <button onClick={() => { navigate(`/edit-pet/${id}`) }} >Edit</button> : ''
                        }
                        {
                            user &&
                            <div>

                                {
                                    !like === true ? <button onClick={LikedPet} >Like</button> : <button onClick={UnLikedPet} >Liked</button>
                                }
                            </div>
                        }

                    </div>
                    <div className="icon-bar">

                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </div>}



            </div>
        </div >
    );



};

export default DetailsPetPage;