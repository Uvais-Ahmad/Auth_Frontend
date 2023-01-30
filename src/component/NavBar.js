import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap'
import './NavBar.css';
function NavvBar(props) {

    let user = props.user.data.data;
    console.log("User in Navbar ",user);
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="cont">
                    <Navbar.Brand >MERN</Navbar.Brand>
                        {
                            (user) ? 
                            <Nav>
                                <NavLink className="m-1" to=''>{user.name}</NavLink>
                                <NavLink className="m-1" to='/add-order'>Add Order</NavLink>
                                <NavLink className="m-1" to='/get-order'>All Orders</NavLink>
                            </Nav>
                                    :
                            <Nav className="me-auto">
                                <NavLink className="m-1" to=''>Home</NavLink>
                                <NavLink className="m-1" to='/login-user'>LogIn</NavLink>
                                <NavLink className="m-1" to='/add-user'>Register</NavLink>    
                            </Nav>
                        }
                </Container>
            </Navbar>
        </>
    )
}

export default NavvBar;