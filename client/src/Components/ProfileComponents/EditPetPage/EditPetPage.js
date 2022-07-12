import './edit-page.css';
import { chekingWhenCreatingOrEditingElement } from '../../../services/chekingWhenCreatingElement';
import { useState, } from 'react';
import ErrorBar from '../ErrorBar/ErrorBar';
import { editPetSubmit } from '../profile.service';
import { useParams } from "react-router-dom";
import isAuthHOC from '../../../services/HOC';

import DeletePage from '../DeletePage/DeletePage'

const EditPetPage = (props) => {

    const { id } = useParams();

    let [errorArray, setError] = useState();
    let [userAction, setActions] = useState(null);

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
            let response = editPetSubmit(result, id);
            return response.then((rs) => {
                if (rs.message) {
                    setError(rs.message);
                    return;
                };
                props.onAction()
                window.location.reload()
            }
            );

        } catch (err) {
            setError(err);
        }

    };






    return (

        <div className='edit-new-pet-root'>
            <div className='edit-new-pet-wrapper'>
                {userAction && <DeletePage petOwnerId={props.userData.petOwner[0]} petId={props.userData._id} />}

                {!userAction && <form className='edit-new-pet-form' onSubmit={EditPet} >
                    <button onClick={
                        () => {
                            props.onAction()
                        }
                    } className='left-arrow'>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <h2 className='add-new-pet-heading'>Edit your pet</h2>
                    <div>

                        <input placeholder='Pet new name' className='input-edit-pet-class' id='petName' name='petName' defaultValue={props.userData.petName} ></input>
                    </div>
                    <div>


                        <input placeholder='Pet weight' className='input-edit-pet-class' type='number' id='petWeight' name='petWeight' defaultValue={props.userData.petWeight} ></input>
                    </div>
                    <div>

                        <input placeholder='Pet breed' className='input-edit-pet-class' id='petBreed' name='petBreed' defaultValue={props.userData.petBreed} ></input>
                    </div>
                    <div>

                        <input placeholder='Pet age' className='input-edit-pet-class' type='number' id='petAge' name='petAge' defaultValue={props.userData.petAge} ></input>
                    </div>
                    <div>
                        <input placeholder='Pet photo' className='input-edit-pet-class' id='petPhoto' name='petPhoto' defaultValue={props.userData.petPhoto}></input>
                    </div>
                    <div>
                        <textarea placeholder='Pet ifno (optinal)' className='input-edit-pet-class pet-info-textarea' id='petInfo' name='petInfo' defaultValue={props.userData.petInfo} />
                    </div>
                    <div className='button-div'>
                        <button className='edit-pet-button' >Edit your pet details</button>
                        <button className='edit-pet-button' onClick={(e) => { e.preventDefault(); setActions('Delete') }} >Delete</button>


                    </div>

                    {
                        errorArray && <ErrorBar errorMessages={errorArray} />
                    }
                </form>}

            </div >
        </div >
    );
};

export default isAuthHOC(EditPetPage);