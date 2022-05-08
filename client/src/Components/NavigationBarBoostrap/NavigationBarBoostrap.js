import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigationBar.css'

const NavigationBar = () => {

    return (<div>
        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="#home" className='navbar'>Navbar</Navbar.Brand>
                <Nav className="itemMenuOne">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav className="itemMenuTwo">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>)

};

export default NavigationBar;