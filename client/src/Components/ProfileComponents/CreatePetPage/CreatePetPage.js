import './createPetPage.css'
import { chekingWhenCreatingElement } from '../../../services/chekingWhenCreatingElement'
import { useState } from 'react'
import ErrorBar from '../ErrorBar/ErrorBar'

const CreatePetPage = () => {

    let [errorArray, setError] = useState()

    const CreatePet = (e) => {
        e.preventDefault()
        let petObj = {
            petName: e.target.petName.value,
            petWeight: e.target.petWeight.value,
            petBreed: e.target.petBreed.value,
            petAge: e.target.petAge.value,
            petPhoto: e.target.petPhoto.value,
            petInfo: e.target.petInfo.value,
        }


        try {
            chekingWhenCreatingElement(petObj)



        } catch (err) {
            setError(err)
        }

    }


    console.log(errorArray)

    return (
        <div className='create-new-pet-root'>
            <h2 className='add-new-pet-heading'>Add new pet</h2>
            <div className='create-new-pet-wrapper'>
                <form className='create-new-pet-form' onSubmit={CreatePet} >
                    <div>

                        <label>Pet name </label>
                        <input className='input-create-pet-class' id='petName' name='petName'></input>
                    </div>
                    <div>

                        <label>Pet weight</label>
                        <input className='input-create-pet-class' type='number' id='petWeight' name='petWeight' ></input>
                    </div>
                    <div>

                        <label>Pet breed</label>
                        <input className='input-create-pet-class' id='petBreed' name='petBreed' ></input>
                    </div>
                    <div>

                        <label>Pet age</label>
                        <input className='input-create-pet-class' type='number' id='petAge' name='petAge' ></input>
                    </div>
                    <div>
                        <label>Pet photo</label>
                        <input className='input-create-pet-class' id='petPhoto' name='petPhoto' ></input>
                    </div>
                    <div>
                        <label>Pet ifno (optional)</label>
                        <textarea className='input-create-pet-class' id='petInfo' name='petInfo' />
                    </div>
                    <button className='create-pet-button' >Add new pet</button>
                    <div>

                        {
                            errorArray && <ErrorBar errorMessages={errorArray} />
                        }

                    </div>
                </form>
            </div >
        </div >
    )
}

export default CreatePetPage