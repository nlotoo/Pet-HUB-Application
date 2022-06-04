

import '../PetsCatalog/petsCatalog.css'
import { useNavigate } from 'react-router-dom'
import PetsCard from './PetsCard/PetsCard'
import { useEffect, useState } from 'react'
import { getUserPets } from '../profile.service'



const PetsCatalog = () => {
    let navigate = useNavigate()
    const CreateNewPet = () => {
        navigate('/create-new-pet')
    }

    let [errorArray, setError] = useState()
    let [userPets, setUserPets] = useState()

    try {

        useEffect(() => {

            getUserPets()
                .then((rs) => {
                    setUserPets(rs)
                })

        }, [])

    } catch (err) {
        console.log(err)
    }


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    <PetsCard userPetData={userPets} />
                    {/* <PetsCard /> */}
                    <div className='add-new-pet-wraper'>
                        <button onClick={CreateNewPet} className='add-new-pet-button'>Add new pet</button>
                    </div>
                </div>

            </div>


        </div>
    )

}

export default PetsCatalog