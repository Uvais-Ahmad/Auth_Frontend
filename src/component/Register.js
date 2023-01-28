import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
function Register () {
    return (
        <>
        <Form className="Form h-75 px-5 py-3 mx-auto">
            <h1 style={{textAlign:'center'}}>Register</h1>
            <FormGroup className="my-3">
                <FormLabel >Name</FormLabel>
                <FormControl required={true} placeholder="Your name"></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Phone</FormLabel>
                <FormControl required={true} placeholder="Your new phone number" ></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Password</FormLabel>
                <FormControl required={true} placeholder="Password"></FormControl>
            </FormGroup>

            <FormGroup className="my-3">
                <FormLabel >Confirm Password</FormLabel>
                <FormControl required={true} placeholder="Confirm password" ></FormControl>
            </FormGroup>

            <Button style={{backgroundColor:'#090938',fontWeight:'bolder'}} className="w-100 mb-2" type="submit" >Register</Button>
            
        </Form>
        </>
    )
}

export default Register;