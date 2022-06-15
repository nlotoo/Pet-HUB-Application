import '../PetsCard/petsCard.css';
import { deleltePetFunc } from '../../ProfileComponents/profile.service';
import { Link, } from 'react-router-dom';


const PetsCard = (data) => {

    const deletePet = (e) => {
        deleltePetFunc(e.target.id);
        window.location.reload();
    };



    if (data.userPetData === undefined) {
        console.log('Loading spinner');
        return (<div> <p>loading spinner</p> </div >);
    } else {
        return data.userPetData
            .map((x, i) => {

                
                
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
                            <label className='pet-label-class info' >Info:</label>

                            <textarea value={x.petInfo} id="pet-info" disabled>

                            </textarea>
                            <div id="pet-card-links">
                                <Link to={`/edit-pet/${x._id}`} className="pet-card-link" id={x._id}>Edit</Link>
                                {/* <Link to={`/pets-delete`} className="pet-card-link" id={x._id}>Delete</Link> */}
                                <button onClick={deletePet} name='deleteBTN' id={x._id} className="pet-card-link" >Delete </button>
                            </div>
                        </div>
                    </div>

                );

            });

    }



};

export default PetsCard;