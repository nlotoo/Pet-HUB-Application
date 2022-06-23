import { Link } from 'react-router-dom'
import './pet-card-our-catalog.css'


const PetsCardU = (data) => {
    let { petsData } = data
    console.log(petsData)

    return petsData.map((x, i) => {
        return (

            <div className="details-pet-card-our-catalog" >
                <h2>{x.petName}</h2>
                <img className='imgs' alt='pet-card-img' src="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg" ></img>
                <h3>breed</h3>
                <p>{x.petBreed}</p>
                
                <Link to={'/pet-details/' + x._id} className='card-button-our-catalog'>Details</Link>
                <Link to={'pet-like/' + x._id} className='card-button-our-catalog'>Like</Link>
            </div>

        )

    })
}



export default PetsCardU;