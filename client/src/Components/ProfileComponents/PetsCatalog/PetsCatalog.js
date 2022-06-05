

import '../PetsCatalog/petsCatalog.css'
import { useNavigate } from 'react-router-dom'
import PetsCard from './PetsCard/PetsCard'
import { useEffect, useState } from 'react'
import { getUserPets } from '../profile.service'
import ReactPaginate from 'react-paginate';



const PetsCatalog = () => {
    let navigate = useNavigate()
    const CreateNewPet = () => {
        navigate('/create-new-pet')
    }

    let [errorArray, setError] = useState()
    let [userPets, setUserPets] = useState()


    let [pageNumber, setPageNumber] = useState(0)

    const petsPerPage = 4
    const pageVisited = pageNumber * petsPerPage

    try {

        useEffect(() => {

            getUserPets()
                .then((rs) => {
                    setUserPets(rs)





                })


        }, [])

    } catch (err) {
        console.log(err)
    }

    // .slice(pageVisited, pageVisited + petsPerPage)

    if (userPets === undefined) {
        console.log('loading spinner')
        return <div><p>loading spinner</p></div>
    }
    const pageCount = Math.ceil(userPets.length / petsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    <PetsCard userPetData={userPets.slice(pageVisited, pageVisited + petsPerPage)} />
                    {/* <PetsCard /> */}
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
    )

}

export default PetsCatalog