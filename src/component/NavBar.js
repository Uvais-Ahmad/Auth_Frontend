import { NavLink, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar} from 'react-bootstrap'

import './NavBar.css';
function NavvBar(props) {

    const navigate = useNavigate();
    const {countCartItem} = props;
    let user = props.user;
    let setUser = props.handleUser;
    

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container className="cont">
                    <Navbar.Brand >MERN</Navbar.Brand>
                        {
                            (user) ? 
                            <Nav>
                                <NavLink className="m-1" to=''>{user.data.data.name}</NavLink>

                                <NavLink className="m-1" to='/checkout'>My Orders</NavLink>
                                
                                <NavLink className="m-1" to= '/CART' >Cart{countCartItem!==0 &&
                                                                             <span style={countStyle}>{countCartItem}</span>}</NavLink>
                                <NavLink className="m-1" onClick={()=>{
                                    localStorage.removeItem("access");
                                    localStorage.removeItem("id");
                                    setUser("");
                                    navigate('/login-user');
                                    
                                }}>Logout</NavLink>
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

const countStyle = {backgroundColor:'lightblue',
                            color:'black',
                            borderRadius:'10px',
                            margin:'auto 3px', 
                            padding:'0 10px'
                        }

export default NavvBar;