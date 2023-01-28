import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";

function AddOrder (){
    return (
        <>
            <Form className="Form p-5 mx-auto">
                <h3 style={{textAlign:'center'}}>New Order</h3>
                <FormGroup className="my-3">
                    <FormLabel >Sub_Total</FormLabel>
                    <FormControl required={true} placeholder="Enter Sub Total"></FormControl>
                </FormGroup>

                <FormGroup className="my-3">
                    <FormLabel >Phone</FormLabel>
                    <FormControl required={true} placeholder="Your phone number"></FormControl>
                </FormGroup>
                
                <Button className="w-100 bg-dark" type="submit">Add Order</Button>
            </Form>
        </>
    )
}

export default AddOrder;