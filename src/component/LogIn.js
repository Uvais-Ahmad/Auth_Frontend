import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
import './LogIn.css';
import { useState } from "react";
import axios from "axios";

// This component known as a CONTROLLED COMPONENT
function LogIn (){

    const[ phone , setPhone] = useState("");
    const[ password , setPassword] = useState("");

    // const [userInfo , setUserInfo] = useState({
    //     phone:"",password:""
    // })

    // function handleChange(e){
    //     const name = e.target.name;
    //     const value = e.target.value;
    //     console.log(`${name}:${value}`);
    //     setUserInfo({...userInfo , [name]:value})
    // }

    async function handleSubmit(e){
        try{
            e.preventDefault();
            console.log("User Info ",{phone,password});

            let user = await axios.post('http://localhost:8000/api/v1/login-user',{phone,password});

        }
        catch(err){
            console.log("Error while login ",err.response.data)
        }
        
    }    

    return (
        <>
            <Form className="Form px-5 py-3 mx-auto" onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center'}} className="mb-3">Log In</h1>
                <FormGroup className="my-4">
                    <FormLabel >Phone</FormLabel>
                    <FormControl type="text" name="phone" value={phone} placeholder="e.g. 989xxxxxxx" onChange={(e) => setPhone(e.target.value)} required></FormControl>
                </FormGroup>

                <FormGroup className="my-4">
                    <FormLabel >Password</FormLabel>
                    <FormControl type="password" name="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required></FormControl>
                </FormGroup>

                <Button  style={{backgroundColor:'#090938',fontWeight:'bolder'}}  className="w-100 mb-1" type="submit" >Log In</Button>
                <FormText ><a href="/">Forgot Password ?</a></FormText>
            </Form>
        </>
    );
}

export default LogIn;