import './pet-card.css'
import { Link } from 'react-router-dom'



const PetCardCatalog = (data) => {
    let { petsData } = data

    return petsData.map((x, i) => {
        return (<div className="pet-card-wrapper-pets-catalog">
            <div className="details-pet-card-pets-catalog">
                <h2>{x.petName}</h2>
                <img className='imgs' alt='pet-card-img' src="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg" ></img>
                
                    <h3>breed</h3>
                    <p>{x.petBreed}</p>
                    <Link to={'/pet-details/' + x._id} className='card-button'>Details</Link>
                    <Link to={'/edit-pet/' + x._id} className='card-button'>Edit</Link>
                    <Link to={'pet-like/' + x._id} className='card-button'>Like</Link>

          
            </div>


        </div >)

    })
}



export default PetCardCatalog;