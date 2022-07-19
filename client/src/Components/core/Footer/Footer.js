import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        
            
        <div className='footer-root' >
          
            <span className="footer-content" >Copyright © 2022 Yordan Nikolov</span>
            <div className='footer-map-tree'>
                <ul>
                    <li><Link to='/'></Link>Home</li>
                    <li><Link to='/'></Link>Our Catalog</li>
                    <li><Link to='/'></Link>About</li>
                </ul>
                <ul>
                    <li><Link to='/'></Link>My Profile</li>
                    <li><Link to='/'></Link>Your Catalog</li>
                    <li><Link to='/'></Link>Add new pet</li>
                </ul>
                <ul>
                <li><Link to='/'></Link>Login</li>
                    <li><Link to='/'></Link>Register</li>
                </ul>
            </div>
            <div className='social-media-button'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
    );
};

export default Footer;