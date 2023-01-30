import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function Register () {

    const [userInfo , setUserInfo] = useState({
        name:"",phone:"",password:"",confirm_password:""
    })

    const navigate = useNavigate();
    const [error , setError] = useState("");
    

    function handleChange(e){
        
        setUserInfo({...userInfo , [e.target.name] : e.target.value})
    }

    async function handleSubmit(e){
        
        try{
            e.preventDefault();
            console.log("user info ",userInfo);
            let url = 'https://mernauth.onrender.com/api/v1/add-user';

            let user = await axios.post(url,userInfo);
            console.log("User response ",user);

            navigate('/login-user');
            // await setUserInfo({
            //     name:"",phone:"",password:"",confirm_password:""
            // });
        }
        catch(err){
            console.log("Error while POST req ",err);
            if(
                err.response && 
                err.response.status >=400 && 
                err.response.status<=500
                ){
                    setError(err.response.data.message);
                }
        }
    }

    return (
        <>
        <Form className="Form h-75 px-5 py-3 mx-auto" onSubmit={handleSubmit}>
            <h1 style={{textAlign:'center'}}>Register</h1>

            {error && <span>{error}</span>}
            <FormGroup className="my-3">
                <FormLabel >Name</FormLabel>
                <FormControl required={true} onChange={handleChange} name="name" value={userInfo.name}  placeholder="Your name"></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Phone</FormLabel>
                <FormControl required={true} onChange={handleChange} name="phone" value={userInfo.phone}  placeholder="Your new phone number" ></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Password</FormLabel>
                <FormControl required={true} onChange={handleChange} name="password" value={userInfo.password}  placeholder="Password"></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Confirm Password</FormLabel>
                <FormControl required={true} onChange={handleChange} name="confirm_password" value={userInfo.confirm_password}  placeholder="Confirm password" ></FormControl>
            </FormGroup>

            <Button style={{backgroundColor:'#090938',fontWeight:'bolder'}} className="w-100 mb-2" type="submit" >Register</Button>
            
        </Form>
        </>
    )
}

export default Register;