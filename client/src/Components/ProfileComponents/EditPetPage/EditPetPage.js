import './edit-page.css';
import { chekingWhenCreatingOrEditingElement } from '../../../services/chekingWhenCreatingElement';
import { useEffect, useState, } from 'react';
import ErrorBar from '../ErrorBar/ErrorBar';
import { editPetSubmit } from '../profile.service';
import { useNavigate, useParams } from "react-router-dom";

import isAuthHOC from '../../../services/HOC';
const EditPetPage = () => {
    const id = useParams()

    let [errorArray, setError] = useState();
    
    let navigate = useNavigate();
    
    const EditPet = (e) => {


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

            // let petInfo = getPetInfo(id)
            // return petInfo.then((pet) => {

            //     console.log(pet)

            // }
            // );



            let response = editPetSubmit(result, id);
            return response.then((rs) => {
                if (rs.message) {
                    setError(rs.message);
                    return;
                };
                navigate('/pets-catalog')
            }
            );

        } catch (err) {
            setError(err);
        }

    }





    return (
        <div className='edit-new-pet-root'>
            <h2 className='add-new-pet-heading'>Edit your pet</h2>
            <div className='edit-new-pet-wrapper'>
                <form className='edit-new-pet-form' onSubmit={EditPet} >
                    <div>

                        <label>Pet name </label>
                        <input className='input-edit-pet-class' id='petName' name='petName' ></input>
                    </div>
                    <div>

                        <label>Pet weight</label>
                        <input className='input-edit-pet-class' type='number' id='petWeight' name='petWeight' ></input>
                    </div>
                    <div>

                        <label>Pet breed</label>
                        <input className='input-edit-pet-class' id='petBreed' name='petBreed'  ></input>
                    </div>
                    <div>

                        <label>Pet age</label>
                        <input className='input-edit-pet-class' type='number' id='petAge' name='petAge'></input>
                    </div>
                    <div>
                        <label>Pet photo</label>
                        <input className='input-edit-pet-class' id='petPhoto' name='petPhoto' ></input>
                    </div>
                    <div>
                        <label>Pet ifno (optional)</label>
                        <textarea className='input-edit-pet-class' id='petInfo' name='petInfo' />
                    </div>
                    <button className='edit-pet-button' >Edit your pet details</button>
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

export default isAuthHOC(EditPetPage);