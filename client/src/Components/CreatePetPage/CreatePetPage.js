import '../CreatePetPage/createPetPage.css'

const CreatePetPage = () => {

    const CreatePet = (e) => {
        e.preventDefault()
      
        console.log('created pet clicked')
    }

    return (
        <div className='create-new-pet-root'>
            <h2>Add new pet</h2>
            <div className='create-new-pet-wrapper'>
                <form className='create-new-pet-form' onSubmit={CreatePet} >
                    <div>

                        <label>Pet name </label>
                        <input className='input-create-pet-class' id='petName' name='petName'></input>
                    </div>
                    <div>

                        <label>Pet weight</label>
                        <input className='input-create-pet-class' id='petWeight' name='petWeight' ></input>
                    </div>
                    <div>

                        <label>Pet breed</label>
                        <input className='input-create-pet-class' id='petBreed' name='petBreed' ></input>
                    </div>
                    <div>

                        <label>Pet age</label>
                        <input className='input-create-pet-class' id='petAge' name='petAge' ></input>
                    </div>
                    <div>

                        <label>Pet photo</label>
                        <input className='input-create-pet-class' id='petPhoto' name='petPhoto' ></input>
                    </div>


                    <button className='create-pet-button' >Create new pet</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePetPage