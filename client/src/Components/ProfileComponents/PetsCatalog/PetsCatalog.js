

import '../PetsCatalog/petsCatalog.css';
import { useNavigate } from 'react-router-dom';
import PetsCard from './PetsCard/PetsCard';
import { useEffect, useState } from 'react';
import { getUserPets } from '../profile.service';
import ReactPaginate from 'react-paginate';
import isAuthHOC from '../../../services/HOC';
import { useFetch } from '../../../services/useFetch';
import React from 'react';




const PetsCatalog = () => {
    let navigate = useNavigate();
    const CreateNewPet = () => {
        navigate('/create-new-pet');
    };

    let [userPets, setUserPets] = useState();
    let [pageNumber, setPageNumber] = useState(0);
    const petsPerPage = 4;
    const pageVisited = pageNumber * petsPerPage;

    const url = 'http://localhost:5000/get-user-pets';
    let petCatalog = useFetch(url);
    console.log(petCatalog)


    try {

        useEffect(() => {

            getUserPets()
                .then((rs) => {
                    setUserPets(rs);
                })

        }, [])

    } catch (err) {
        console.log(err);
    }


    if (userPets === undefined) {
        return (<div className='loader-wraper'>
            <div className='loader'></div>
        </div>);
    };
    const pageCount = Math.ceil(userPets.length / petsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    {userPets.length === 0 && <div className='no-pet-message'><span> You still don`t have pet.</span></div>}
                    <PetsCard userPetData={userPets.slice(pageVisited, pageVisited + petsPerPage)} />

                    <div className='add-new-pet-wraper'>
                        <button onClick={CreateNewPet} className='add-new-pet-button'>Add new pet</button>
                    </div>
                </div>

            </div>
            <div className='paginator' >
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />

            </div>

        </div>
    );

};

export default isAuthHOC(PetsCatalog);