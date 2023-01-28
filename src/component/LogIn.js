import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import './LogIn.css';
import { useState } from "react";

// This component known as a CONTROLLED COMPONENT
function LogIn (){

    const [registeration , setRegisteration] = useState({
        email:"",password:""
    })

    function handleSubmit(e){
        const name = e.target.name;
        const value = e.target.value;
        
        setRegisteration({...registeration , [name]:value})
    }

    function handleSubmitbtn(e){
        
    }    

    return (
        <>
            <Form className="Form px-5 py-3 mx-auto" onSubmit={handleSubmitbtn}>
                <h1 style={{textAlign:'center'}} className="mb-3">Log In</h1>
                <FormGroup className="my-4">
                    <FormLabel >Email or Username</FormLabel>
                    <FormControl type="text" name="email" value={registeration.email} placeholder="e.g. abc@xyz.uv" onChange={handleSubmit} required></FormControl>
                </FormGroup>

                <FormGroup className="my-4">
                    <FormLabel >Password</FormLabel>
                    <FormControl type="password" name="password" value={registeration.password} placeholder="Enter password" onChange={handleSubmit} required></FormControl>
                </FormGroup>

                <Button  style={{backgroundColor:'#090938',fontWeight:'bolder'}}  className="w-100 mb-1" type="submit" >Log In</Button>
                <FormText ><a href="/">Forgot Password ?</a></FormText>
            </Form>
        </>
    );
}

export default LogIn;