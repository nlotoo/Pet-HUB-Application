import './profile-page.css'

const ProfilePage = () => {

    let myPetsButtonHandle =()=> {
        console.log('my pets button')
    }

    return (

        <div className='user-profile-heading'>
            <h2>User Profile</h2>
            <div className="cards-container">
                <div className="card card-one">
                    <header>
                        <div className="avatar">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="Jhon Doe" />
                        </div>
                    </header>

                    <h3>Jhon Doe</h3>
                    <div className='user-info'>
                        <div>
                            <i className='fas fa-dog'></i>
                            <span>&nbsp;&nbsp;Missy,Stuard,Barry</span>
                        </div>

                        <div>
                            <i className='fas fa-mobile'></i>
                            <span>&nbsp;&nbsp;+88888888</span>
                        </div>

                        <div>
                            <i className='fas fa-location'></i>
                            <span>&nbsp;&nbsp;Crediton</span>
                        </div>
                        <div>
                            <i className='fas fa-envelope'></i>
                            <span>&nbsp;&nbsp;example@abv.bg</span>
                        </div>

                    </div>
                    <footer>
                        <button onClick={myPetsButtonHandle} className='my-pets-button'> My pets</button>
                    </footer>
                </div>


            </div>
        </div>

    )

}

export default ProfilePage