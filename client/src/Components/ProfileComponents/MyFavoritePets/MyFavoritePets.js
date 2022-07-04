import { useFetch } from "../../../services/useFetch";
import PetCardCatalog from "../MyFavoritePets/PetCardCatalog/PetCardCatalog";
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import './petsCatalog.css'
import useResponsiveDesign from "../../../services/useResposiveDisplayTool";

const MyFavorite = () => {


    const userID = localStorage.getItem('User ID')

    const url = `http://localhost:5000/my-favorites/${userID}`;
    let petFavorites = useFetch(url)

    let [pageNumber, setPageNumber] = useState(0);
    const petsPerPage = useResponsiveDesign();
    const pageVisited = pageNumber * petsPerPage;
    const pageCount = Math.ceil(petFavorites?.data?.length / petsPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };



    return (
        <div className="catalog-root">
            <h3 className="pets-heading">My favorites pets</h3>
            <div className="pets-catalog-wraper">

                {petFavorites?.data?.length === undefined ? <div className='loader-wraper'>
                    <div className='loader'></div>
                </div> : <div className="pets-catalog-rail">
                    <PetCardCatalog petsData={petFavorites?.data?.slice(pageVisited, pageVisited + petsPerPage)} />
                    {petFavorites?.data?.length === 0 && <span className='no-pet-message' > You still don`t have favorites pet.</span>}
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

        </div >
    );
};


export default MyFavorite