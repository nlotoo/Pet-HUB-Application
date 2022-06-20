import './our-catalog.css';
import PetsCard from './PetsCard/PetsCard';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from '../../services/useFetch';


const OutCatalog = () => {


    const url = 'http://localhost:5000/get-all-pets';
    let petCatalog = useFetch(url);

    let [pageNumber, setPageNumber] = useState(0);
    const petsPerPage = 4;
    const pageVisited = pageNumber * petsPerPage;
    const pageCount = Math.ceil(petCatalog?.data?.length / petsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                {petCatalog?.data?.length === 0 ? <div className='no-pet-message'>
                    <span> You still don`t have pet.</span>
                </div> : ''}
                {petCatalog?.data?.length === undefined ? <div className='loader-wraper'>
                    <div className='loader'></div>
                </div> : <div className="pets-catalog-rail">
                    <PetsCard userPetData={petCatalog?.data?.slice(pageVisited, pageVisited + petsPerPage)} />
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

export default OutCatalog;