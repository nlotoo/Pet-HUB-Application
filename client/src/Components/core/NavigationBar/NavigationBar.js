import './NavigationBar.css'

const NavigationBar = () => {

    return (<div className='navbar-root' >
         <header>
        <nav className="nav-bar">
            <ul className='nav-bar-ul-list'>
                <li><a href="/home-page-banner">Home</a></li>
                <li><a href="/about-us">About</a></li>
                <li><a href="/contact-us">Contatct us</a></li>
                <li><a href="/sign-up">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/logout">Logout</a></li>

               
            </ul>
        </nav>
    </header>
    </div>)

};

export default NavigationBar;