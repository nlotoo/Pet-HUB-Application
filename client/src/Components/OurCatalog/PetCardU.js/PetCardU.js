import { Link } from 'react-router-dom'
import './pet-card-our-catalog.css'


const PetsCardU = (data) => {
    let { petsData } = data
    const userId = localStorage.getItem('User ID')


    return petsData.map((x, i) => {

        return (
            <div key={x.petOwner[0]+i} className = "details-pet-card-our-catalog" >
                <h2>{x.petName.slice(0,1).toUpperCase()+x.petName.slice(1,)}</h2>
                <img className='imgs' alt='pet-card-img' src={x.petPhoto} ></img>
                <h3>breed</h3>
                <p>{x.petBreed}</p>
        {
            x.petOwner[0] === userId ? <Link className='card-button-our-catalog' to={'/edit-pet/' + x._id}>Edit</Link>
                : ''
        }
        <Link to={'/pet-details/' + x._id} className='card-button-our-catalog'>Details</Link>
            </div >

        )

    })
}



export default PetsCardU;