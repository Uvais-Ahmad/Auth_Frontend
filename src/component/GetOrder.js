import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";

function GetOrder (props){
    const [orders , setOrders] = useState();
    let {id} = useParams();
    let user = props.user;

    const [error , setError] = useState("");

    useEffect(getData);

    async function getData (){
        try{
            let url = `https://mernauth.onrender.com/api/v1/get-order/${id}`;
            let ordersRes = await axios.get(url);
            console.log("Orders ",ordersRes);
        }
        catch(err){
            console.log("Error while get  ",err);
            if(  
                err.response && 
                err.response.status >=400 && 
                err.response.status<=500
                ){  console.log("SteError ",error)
                    await setError(err.response.data.message);
                    console.log("SteError ",error)
                }
        }
    }

    return (
        <>
            <h1>GetOrder list </h1>
            {error && <span  className="text-danger">{error}</span>}
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-info'>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card>
        </>
    )
}

export default GetOrder;