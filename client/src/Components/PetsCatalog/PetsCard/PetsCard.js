
import '../PetsCard/petsCard.css'

const PetsCard = () => {

    return (

        <div id="pet-card" className='pets-card'>

            <h2>Pets Name</h2>
            <img id="card-img" src="https://cbsnews3.cbsistatic.com/hub/i/r/2020/10/15/a11ade40-1d79-4170-8fab-b42721a4cc79/thumbnail/1200x630/9ec24c01427232d790dd32a559a2effe/www-vieler-photography-com23.jpg"></img>
           
            <div id="pet-info"> age:<span>2</span></div>
            <div id="pet-info">breed:<span>xaxa</span></div>
            <div id="pet-info">kg:<span>7</span></div>
            <div id="pet-info">
                <span >Info:</span>
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

    )

}

export default PetsCard