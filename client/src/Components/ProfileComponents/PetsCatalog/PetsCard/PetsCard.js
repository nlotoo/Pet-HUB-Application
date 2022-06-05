
import { useEffect, useState } from 'react'
import '../PetsCard/petsCard.css'

const PetsCard = (data) => {

    let [userPets, setUserPets] = useState()
  



    if (data.userPetData == undefined) {
        console.log('Loading spinner')
        return (< div > <p>loading spinner</p> </div >)
    } else {

        return data.userPetData
            .map((x, i) => {
                return (
                    <div id="pet-card" className='pets-card' key={x.petName + i}>
                        <h2 id="petHeadig-class">{x.petName}</h2>
                        <img id="card-img" alt="img" src="https://cbsnews3.cbsistatic.com/hub/i/r/2020/10/15/a11ade40-1d79-4170-8fab-b42721a4cc79/thumbnail/1200x630/9ec24c01427232d790dd32a559a2effe/www-vieler-photography-com23.jpg" />
                        <div className='pet-info-wraper'>
                            <label className='pet-label-class'>Age</label>
                            <div id="pet-info">2</div>
                            <label className='pet-label-class' >Breed</label>
                            <div id="pet-info">css</div>
                            <label className='pet-label-class' >kg.</label>
                            <div id="pet-info">7</div>
                            <div id="pet-info">
                                <label className='pet-label-class' >Info:</label>
                                <p>
                                    Lorem ipsum dolor sit amet.
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                            <div id="pet-card-buttons">
                                <button id="pet-card-button">edit</button>
                                <button id="pet-card-button">delete</button>
                            </div>
                        </div>


                    </div>
                    
                    )

            })





    }





    // let infoo = data.userPetData
    //     .map((pet) => {
    //         console.log(pet);
    //     });






}

export default PetsCard