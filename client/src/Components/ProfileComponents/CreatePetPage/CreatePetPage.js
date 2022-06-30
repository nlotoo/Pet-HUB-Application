import './createPetPage.css';
import { chekingWhenCreatingOrEditingElement } from '../../../services/chekingWhenCreatingElement';
import { useState, } from 'react';
import { createPet } from '../profile.service.js';
import ErrorBar from '../ErrorBar/ErrorBar';

import { useNavigate, useParams } from "react-router-dom";
import isAuthHOC from '../../../services/HOC'
const CreatePetPage = () => {

    let [errorArray, setError] = useState();
    let navigate = useNavigate();
    const { id } = useParams()
    console.log(id)
    const CreatePet = (e) => {
        e.preventDefault();
        let petOwner = window.localStorage.getItem('User ID');
        let petObj = {
            petName: e.target.petName.value,
            petWeight: e.target.petWeight.value,
            petBreed: e.target.petBreed.value,
            petAge: e.target.petAge.value,
            petPhoto: e.target.petPhoto.value,
            petInfo: e.target.petInfo.value,
            petOwner: petOwner
        };


        try {

            let result = chekingWhenCreatingOrEditingElement(petObj);
            setError(undefined);

            let response = createPet(result);
            response.then((rs) => {

                if (rs.errorMessage) {
                    setError(rs.errorMessage);
                    return;
                }
                navigate(`/get-user-pets/${id}`);
            }
            )

        } catch (err) {
            setError(err);
        }

    }




    return (
        <div className='create-new-pet-root'>
            <div className='create-new-pet-wrapper'>
                <form className='create-new-pet-form' onSubmit={CreatePet} >
                    <h2 className='add-new-pet-heading'>Create new pet</h2>
                    <div>


                        <input placeholder='Pet name' className='input-create-pet-class' id='petName' name='petName'></input>
                    </div>
                    <div>

                        <input placeholder='Pet weight' className='input-create-pet-class' type='number' id='petWeight' name='petWeight' ></input>
                    </div>
                    <div>

                        <input placeholder='Pet breed' className='input-create-pet-class' id='petBreed' name='petBreed' ></input>
                    </div>
                    <div>

                        <input placeholder='Pet age' className='input-create-pet-class' type='number' id='petAge' name='petAge' ></input>
                    </div>
                    <div>
                        <input placeholder='Pet photo' className='input-create-pet-class' id='petPhoto' name='petPhoto' ></input>
                    </div>
                    <div>
                        <textarea placeholder='Pet info (optional)' className='input-create-pet-class textarea-class' id='petInfo' name='petInfo' />
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
    );
};

export default isAuthHOC(CreatePetPage);