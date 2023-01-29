import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import './LogIn.css';
import { useState } from "react";

// This component known as a CONTROLLED COMPONENT
function LogIn (){

    const [userInfo , setUserInfo] = useState({
        phone:"",password:""
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name}:${value}`);
        setUserInfo({...userInfo , [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("User Info ",userInfo);
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