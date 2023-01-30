import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import './LogIn.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This component known as a CONTROLLED COMPONENT
function LogIn (props){

    const [userInfo , setUserInfo] = useState({
        phone:"",password:""
    })

    const navigate = useNavigate();

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
    
        setUserInfo({...userInfo , [name]:value})
    }

    async function handleSubmit(e){
        try{
            e.preventDefault();
            console.log("User Info ",userInfo);  
            
            let url = 'https://mernauth.onrender.com/api/v1/login-user';

            let user = await axios.post(url,userInfo);

            console.log("User response ",user);

            props.handleUser(user);

            navigate('/add-order');
            // await setUserInfo({
            //     phone:"",password:""
            // });
        }
        catch(err){
            console.log("Error while login ",err)
        } 
    }    

    return (
        <>
            <Form className="Form px-5 py-3 mx-auto" onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center'}} className="mb-3">Log In</h1>
                <FormGroup className="my-4">
                    <FormLabel >Phone</FormLabel>
                    <FormControl type="text" name="phone" value={userInfo.phone} placeholder="e.g. 989xxxxxxx" onChange={handleChange} required></FormControl>
                </FormGroup>

                <FormGroup className="my-4"> 
                    <FormLabel >Password</FormLabel>
                    <FormControl type="password" name="password" value={userInfo.password} placeholder="Enter password" onChange={handleChange} required></FormControl>
                </FormGroup>

                <Button  style={{backgroundColor:'#090938',fontWeight:'bolder'}}  className="w-100 mb-1" type="submit" >Log In</Button>
                <FormText ><a href="/">Forgot Password ?</a></FormText>
            </Form>
        </>
    );
}

export default LogIn;