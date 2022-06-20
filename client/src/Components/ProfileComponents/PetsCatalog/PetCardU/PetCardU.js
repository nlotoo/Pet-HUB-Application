import { Link } from 'react-router-dom'
import './pet-card.css'



const PetsCardU = (data) => {
    let { petsData } = data
    console.log(petsData)

    return petsData.map((x, i) => {
        return (<div className="pet-card-wrapper">
            <div className="details-pet-card">
                <h2>{x.petName}</h2>
                <img className='imgs' src="https://image.shutterstock.com/image-photo/happy-puppy-dog-smiling-on-260nw-1799966587.jpg" ></img>
                
                    <h3>breed</h3>
                    <p>{x.petBreed}</p>
                    <Link to={'pet-details/' + x._id} className='card-button'>Details</Link>
                    <Link to={'pet-edit/' + x._id} className='card-button'>Edit</Link>
                    <Link to={'pet-like/' + x._id} className='card-button'>Like</Link>

          
            </div>


        </div >)

    })
}



export default PetsCardU;