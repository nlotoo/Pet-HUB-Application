import './profile-page.css'

const ProfilePage = () => {

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
                            <i class='fas fa-dog'></i>
                            <span>&nbsp;&nbsp;Missy,Stuard,Barry</span>
                        </div>

                        <div>
                            <i class='fas fa-mobile'></i>
                            <span>&nbsp;&nbsp;+88888888</span>
                        </div>

                        <div>
                            <i class='fas fa-location'></i>
                            <span>&nbsp;&nbsp;Crediton</span>
                        </div>
                        <div>
                            <i class='fas fa-envelope'></i>
                            <span>&nbsp;&nbsp;example@abv.bg</span>
                        </div>

                    </div>
                    <footer>

                    </footer>
                </div>


            </div>
        </div>

    )

}

export default ProfilePage