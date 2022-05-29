


import '../PetsCatalog/petsCatalog.css'

import PetsCard from './PetsCard/PetsCard'

const PetsCatalog = () => {


    return (
        <div className="pets-catalog-wraper">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-cards-content">
                <PetsCard />
            </div>



        </div>
    )

}

export default PetsCatalog