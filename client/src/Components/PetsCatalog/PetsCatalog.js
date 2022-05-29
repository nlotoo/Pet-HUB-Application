


import '../PetsCatalog/petsCatalog.css'

import PetsCard from './PetsCard/PetsCard'

const PetsCatalog = () => {


    return (
        <div className="catalog-root">
            <h3 className="pets-heading">Catalog</h3>
            <div className="pets-catalog-wraper">
                <div className="pets-catalog-rail">
                    <PetsCard />
                    <PetsCard />
                </div>
            </div>


        </div>
    )

}

export default PetsCatalog