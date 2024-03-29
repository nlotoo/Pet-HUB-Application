

import '../PetsCatalog/petsCatalog.css';
import { useNavigate, useParams } from 'react-router-dom';

import { useState } from 'react';

import ReactPaginate from 'react-paginate';
import isAuthHOC from '../../../services/HOC';
import { useFetch } from '../../../services/useFetch';
import React from 'react';
import PetCardCatalog from './PetCardCatalog/PetCardCatalog';
import useResponsiveDesign from '../../../services/useResposiveDisplayTool';



const PetsCatalog = () => {
    let navigate = useNavigate();
    const { id } = useParams()
    const CreateNewPet = () => {
        navigate('/create-new-pet/' + id);
    };


    const url = `http://localhost:5000/get-user-pets/${id}`;
    let petCatalog = useFetch(url)

    let [pageNumber, setPageNumber] = useState(0);
    const petsPerPage = useResponsiveDesign();
    const pageVisited = pageNumber * petsPerPage;
    const pageCount = Math.ceil(petCatalog?.data?.length / petsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                {petCatalog?.data?.length === undefined ? <div className='loader-wraper'>
                    <div className='loader'></div>
                </div> : <div className="pets-catalog-rail">
                    <PetCardCatalog petsData={petCatalog?.data?.slice(pageVisited, pageVisited + petsPerPage)} />
                    {petCatalog?.data?.length === 0 && <span className='no-pet-message' > You still don`t have pet.</span>}
                    {petCatalog?.data?.length < 4 && <button onClick={CreateNewPet} className='add-new-pet-button'>Click here to add new pet </button>}
                </div>}
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