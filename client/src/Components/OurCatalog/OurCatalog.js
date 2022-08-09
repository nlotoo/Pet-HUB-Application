import './our-catalog.css';
import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useFetch } from '../../services/useFetch';
import PetsCardU from './PetCardU.js/PetCardU';
import { UserContext } from '../../services/UserContex';
import useResponsiveDesign from '../../services/useResposiveDisplayTool';



const OutCatalog = (props) => {


    const url = 'http://localhost:5000/get-all-pets';
    let petCatalog = useFetch(url);

    let [pageNumber, setPageNumber] = useState(0);



    const petsPerPage = useResponsiveDesign();
    const pageVisited = pageNumber * petsPerPage;
    const pageCount = Math.ceil(petCatalog?.data?.length / petsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };


    const { value } = useContext(UserContext);

    let [, setSearchQuery] = useState('')
    useEffect(() => {
        setSearchQuery(value)
    }, [value]);

    const searchUrl = `http://localhost:5000/search-pet/query/${value}`;
    let searchedPets = useFetch(searchUrl);

    return (
        <div className="catalog-root">
            <h3 className="pets-heading">All dog Catalog</h3>
            <div className="pets-catalog-wraper">
       
                {petCatalog?.data?.length === 0 ? <div className='no-pet-message'>
                    <span> Still don`t have pet.</span>
                </div> : ''}
                {petCatalog?.data?.length === undefined ? <div className='loader-wraper'>
                    <div className='loader'></div>
                </div> : <div className="pets-catalog-rail">
                    {value === '' || value === null
                        ? <PetsCardU petsData={petCatalog?.data?.slice(pageVisited, pageVisited + petsPerPage)} />
                        : searchedPets.data?.length === 0
                            ? <h2 className='not-found-text'><i class="fa-solid fa-circle-question"></i>&nbsp;The pet is not found. Please review what you loking for.&nbsp;<i class="fa-solid fa-circle-question"></i></h2>
                            : <PetsCardU petsData={searchedPets?.data?.slice(pageVisited, pageVisited + petsPerPage)} />
                    }



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