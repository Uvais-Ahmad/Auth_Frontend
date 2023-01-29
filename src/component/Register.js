import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import {useState} from 'react'
function Register () {

    const [userInfo , setUserInfo] = useState({
        name:"",phone:"",password:"",confirm_password:""
    })

    function handleChange(e){
        console.log(`${e.target.name} : ${e.target.value}`)
        setUserInfo({...userInfo , [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("useriNFO ",userInfo)
    }

    return (
        <>
        <Form className="Form h-75 px-5 py-3 mx-auto" onSubmit={handleSubmit}>
            <h1 style={{textAlign:'center'}}>Register</h1>
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