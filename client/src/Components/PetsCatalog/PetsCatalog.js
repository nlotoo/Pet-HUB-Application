

import { Link } from 'react-router-dom'
import '../PetsCatalog/petsCatalog.css'

import PetsCard from './PetsCard/PetsCard'

const PetsCatalog = () => {


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    <PetsCard />
                    <PetsCard />
                    <div className='add-new-pet-wraper'>
                        <button className='add-new-pet-button'><Link to='/create-new-pet'>Add new pet</Link></button>
                    </div>
                </div>

            </div>


        </div>
    )

}

export default PetsCatalog