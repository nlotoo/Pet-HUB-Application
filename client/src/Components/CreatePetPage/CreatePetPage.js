

const CreatePetPage = () => {

    const CreatePet = (e) => {
        e.preventDefault()
        console.log('created  pet')
    }

    return (
        <div>
            <form onSubmit={CreatePet} >



                <button>Create new pet</button>
            </form>
        </div>
    )
}

export default CreatePetPage