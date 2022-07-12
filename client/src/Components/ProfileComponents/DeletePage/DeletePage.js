import { useNavigate } from 'react-router-dom'
import { deleltePetFunc } from '../profile.service';
import './delete-page.css'

const DeletePage = (props) => {
    
    const navigate = useNavigate();
    const userID = localStorage.getItem('User ID')


    return (
        <div className='delete-wraper'>
            <div className='delete-question'>
                <h4>Do you really want to delete?</h4>
                <button onClick={(e) => {

                    deleltePetFunc(props.petId)
                    navigate(`/get-user-pets/${userID}`)
                }} className="delete-pet-button">YES</button>
                <button onClick={() => {
                    navigate(`/get-user-pets/${userID}`)
                }} className="delete-pet-button">NO</button>
            </div>
        </div>
    )
}

export default DeletePage