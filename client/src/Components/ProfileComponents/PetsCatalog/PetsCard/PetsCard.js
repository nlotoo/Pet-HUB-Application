import '../PetsCard/petsCard.css'
import { deleltePetFunc } from '../../profile.service'
const PetsCard = (data) => {

    const deletePet = (e) => {
        deleltePetFunc(e.target.id);
        window.location.reload();
    }

    if (data.userPetData == undefined) {
        console.log('Loading spinner')
        return (< div > <p>loading spinner</p> </div >)
    } else {
        return data.userPetData
            .map((x, i) => {
               console.log(x.petPhoto)
                return (
                    <div id="pet-card" className='pets-card' key={x.petName + i}>
                        <h2 id="petHeadig-class">{x.petName}</h2>
                        <img id="card-img" alt="img" src={x.petPhoto} />
                        <div className='pet-info-wraper'>
                            <label className='pet-label-class'>Age</label>
                            <div id="pet-info">{x.petAge}</div>
                            <label className='pet-label-class' >Breed</label>
                            <div id="pet-info">{x.petBreed}</div>
                            <label className='pet-label-class' >kg.</label>
                            <div id="pet-info">{x.petWeight}</div>
                            <div id="pet-info">
                                <label className='pet-label-class' >Info:</label>
                                <p>
                                    {x.petInfo}

                                </p>
                            </div>
                            <div id="pet-card-buttons">
                                <button className="pet-card-button" id={x._id}>edit</button>
                                <button onClick={deletePet} name='deleteBTN' id={x._id} className="pet-card-button" >Delete </button>
                            </div>
                        </div>
                    </div>

                )

            });

    }



}

export default PetsCard