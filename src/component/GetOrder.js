import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from 'axios';
import { useParams } from "react-router-dom";

function GetOrder (props){
    const [orders , setOrders] = useState();
    let {id} = useParams();
    let user = props.user;

    const [error , setError] = useState("");

    // useEffect(getData);
    getData();
    async function getData (){
        try{
            const id = localStorage.getItem('id'); 
            const token = localStorage.getItem('access');
         
            let headers = {'authentication' :token}
            let url = `https://mernauth.onrender.com/api/v1/get-order/${id}`;

            let ordersRes = await axios.get(url,{headers});
            console.log("Orders ",ordersRes);

            let orderList = ordersRes.data.data.orders;
            console.log(orderList)
            setOrders(orderList);
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

            {
                orders && orders.map( (order) => {
                        return(
                            <Card style={{ width: '18rem' }} key={order._id}>
                                <Card.Body>
                                    <Card.Title className='text-info'>{order.sub_total}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-secondary">{order.phone}</Card.Subtitle>
                                </Card.Body>
                            </Card>
                        )
                })
            }

            {/* <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title className='text-info'>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary">Card Subtitle</Card.Subtitle>
                </Card.Body>
            </Card> */}
        </>
    )
}

export default GetOrder;