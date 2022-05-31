

import '../PetsCatalog/petsCatalog.css'
import { useNavigate } from 'react-router-dom'
import PetsCard from './PetsCard/PetsCard'

const PetsCatalog = () => {
    let navigate = useNavigate()
    const CreateNewPet = () => {
        navigate('/create-new-pet')
    }


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    <PetsCard />
                    <PetsCard />
                    <div className='add-new-pet-wraper'>
                        <button onClick={CreateNewPet} className='add-new-pet-button'>Add new pet</button>
                    </div>
                </div>

            </div>


        </div>
    )

}

export default PetsCatalog