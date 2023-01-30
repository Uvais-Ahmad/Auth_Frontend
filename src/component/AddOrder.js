import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from "react";
import axios from 'axios';
function AddOrder (){

    const [order , setOrder] = useState({
        sub_total :"", phone : ""
    })

    const [error , setError] = useState("");

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        setOrder({...order , [name]:value})
    }

    async function handleSubmit(e){
        try{

        
            e.preventDefault();
            console.log("order Info ",order);

            let url = 'https://mernauth.onrender.com/api/v1/add-order';
            let orders = await axios.post(url,order);
            console.log("order response ",orders);

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
            <Form className="Form p-5 mx-auto" onSubmit={handleSubmit}>
                <h3 style={{textAlign:'center'}}>New Order</h3>
                {error && <span  className="text-danger">{error}</span>}
                <FormGroup className="my-3">
                    <FormLabel >Sub_Total</FormLabel>
                    <FormControl required={true} name="sub_total" onChange={handleChange} value={order.sub_total} placeholder="Enter Sub Total"></FormControl>
                </FormGroup>

                <FormGroup className="my-3">
                    <FormLabel >Phone</FormLabel>
                    <FormControl required={true} name="phone" onChange={handleChange} value={order.phone} placeholder="Your phone number"></FormControl>
                </FormGroup>
                
                <Button className="w-100 bg-dark" type="submit">Add Order</Button>
            </Form>
        </>
    )
}

export default AddOrder;