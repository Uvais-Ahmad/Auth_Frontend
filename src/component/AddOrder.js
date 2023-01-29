import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from "react";
function AddOrder (){

    const [order , setOrder] = useState({
        sub_total :"", phone : ""
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        console.log(`${name}:${value}`);
        setOrder({...order , [name]:value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log("User Info ",order);
    }

    return (
        <>
            <Form className="Form p-5 mx-auto" onSubmit={handleSubmit}>
                <h3 style={{textAlign:'center'}}>New Order</h3>
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