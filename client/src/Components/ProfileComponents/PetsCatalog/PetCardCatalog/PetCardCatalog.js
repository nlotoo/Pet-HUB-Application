import './pet-card.css'
import { Link } from 'react-router-dom'



const PetCardCatalog = (data) => {
    let { petsData } = data


    return petsData.map((x, i) => {
        return (

            <div className="pet-card-wrapper-pets-catalog">
                <div className="details-pet-card-pets-catalog">
                    <h2>{x.petName.slice(0, 1).toUpperCase() + x.petName.slice(1,)}</h2>

                    <img className='imgs' alt='pet-card-img' src={x.petPhoto} ></img>

                    <h3>breed</h3>
                    <p>{x.petBreed}</p>
                    <Link to={'/pet-details/' + x._id} className='card-button'>Details</Link>


                </div>


            </div >)

    })
}



export default PetCardCatalog;