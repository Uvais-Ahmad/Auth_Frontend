import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import './LogIn.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// This component known as a CONTROLLED COMPONENT
function LogIn (props){

    //State object
    const [userInfo , setUserInfo] = useState({
        phone:"",password:""
    })

    //to show error and Loading
    const [status , setStatus] = useState(false);
    const [error , setError] = useState();

    //after sucessfull login to naviagte another path
    const navigate = useNavigate();

    //handle onChange input field
    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
    
        setUserInfo({...userInfo , [name]:value})
    }



    async function handleSubmit(e){
        try{
            e.preventDefault();
            let url = 'https://mern-invoice.up.railway.app/api/v1/login-user'
            // let url = 'http://100.26.232.24/api/v1/login-user';
            // let url = 'https://invoicegenerate.onrender.com/api/v1/login-user'
            let user = await axios.post(url,userInfo); 
            const token = user.data.data.access_token;
            const id = user.data.data.id;

            //set JWT tokem in LocalStorage
            localStorage.setItem("access",token);
            localStorage.setItem("id",id)

            // set Logged In use in state its define in App Component
            props.handleUser(user);

            navigate('/');
            
        }
        catch(err){
            console.log("Error while login ",err)
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
            {
                status && <h1 style={{textAlign:'center',color:'blueviolet'}}>Loading......</h1>
                
            }
            {status && 
                <h4 style={{textAlign:'center',color:'blueviolet'}}>server slow, wait a minutes please...</h4>
            }
            <Form className="Form px-5 py-3 mx-auto" onSubmit={handleSubmit}>
                <h1 style={{textAlign:'center'}} className="mb-3">Log In</h1>

                {error && <span  className="text-danger">{error}</span>}
                <FormGroup className="my-4">
                    <FormLabel >Phone</FormLabel>
                    <FormControl type="text" name="phone" value={userInfo.phone} placeholder="e.g. 989xxxxxxx" onChange={handleChange} required></FormControl>
                </FormGroup>

                <FormGroup className="my-4"> 
                    <FormLabel >Password</FormLabel>
                    <FormControl type="password" name="password" value={userInfo.password} placeholder="Enter password" onChange={handleChange} required></FormControl>
                </FormGroup>

                <Button onClick={()=>setStatus(true)}  style={{backgroundColor:'#090938',fontWeight:'bolder'}}  className="w-100 mb-1" type="submit" >Log In</Button>
                
            </Form>
        </>
    );
}

export default LogIn;