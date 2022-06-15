

import './our-catalog.css';
import PetsCard from './PetsCard/PetsCard';
import { useEffect, useState } from 'react';
import { getAllPets } from '../ProfileComponents/profile.service';
import ReactPaginate from 'react-paginate';



const OutCatalog = () => {

    let [userPets, setUserPets] = useState();


    let [pageNumber, setPageNumber] = useState(0);

    const petsPerPage = 4;
    const pageVisited = pageNumber * petsPerPage;

    try {

        useEffect(() => {

            getAllPets()
                .then((rs) => {
                    console.log(rs)
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

export default OutCatalog;