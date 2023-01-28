import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap'
import './NavBar.css';
function NavvBar() {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand >MERN</Navbar.Brand>
                        <Nav className="me-auto">
                            <NavLink className="m-1" to='/'>Home</NavLink>
                            <NavLink className="m-1" to='/login-user'>LogIn</NavLink>
                            <NavLink className="m-1" to='/add-order'>Add Order</NavLink>
                            <NavLink className="m-1" to='/get-order'>All Orders</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavvBar;