import { useNavigate } from 'react-router-dom';
import isAuthHOC from '../../../services/HOC';
import { useFetch } from '../../../services/useFetch';
import './profile-page.css';
const ProfilePage = () => {

    let navigate = useNavigate();
    const url = 'http://localhost:5000/user-profile/62999ddbabb5b44a60d0c35d';

    let myPetsButtonHandle = () => {
        navigate('/pets-catalog');
    };

    let userFetch = useFetch(url);
    let petCount = userFetch.data?.pets.length;


    return (
        <div className='user-profile-heading'>
            <h2>User Profile</h2>{
                userFetch.loading ? (<div className='loader-wraper'>
                    <div className='loader'></div>
                </div>) : <div className="cards-container">
                    <div className="card card-one">
                        <header>{
                            userFetch.data?.gender === 'male' ? <div className="avatar">
                                <img className='profile-img-class' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HoveSx5prCIWhGymQ6z5-G-F3rejFBbVuA&usqp=CAU" alt="user-male-pic" />
                            </div> : <div className="avatar">
                                <img className='profile-img-class' src="https://cdn-icons-png.flaticon.com/512/146/146025.png" alt="user-female-pic" />
                            </div>
                        }
                        </header>
                        <h3>{userFetch.data?.username[0]?.toUpperCase() + userFetch.data?.username?.slice(1)}</h3>
                        <div className='user-info'>
                            <div>
                                <i className='fas fa-dog'></i>
                                <span>&nbsp;{petCount ? `You have  ${petCount} pets! ` : 'You don`t have pet yet!'}
                                </span>
                            </div>
                            <div>
                                <i className='fas fa-mobile'></i>
                                <span>&nbsp;&nbsp;+{userFetch.data?.userPhoneNumber}</span>
                            </div>
                            <div>
                                <i className='fas fa-location'></i>
                                <span>&nbsp;&nbsp;{userFetch.data?.location[0]?.toUpperCase() + userFetch.data?.location?.slice(1)}</span>
                            </div>
                            <div>
                                <i className='fas fa-envelope'></i>
                                <span>&nbsp;&nbsp;{userFetch.data?.userEmail}</span>
                            </div>
                        </div>
                        <footer>
                            <button onClick={myPetsButtonHandle} className='my-pets-button'>My pets</button>
                        </footer>
                    </div>
                </div>
            }

        </div>
    );
};

export default isAuthHOC(ProfilePage);