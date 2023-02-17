import './Product.css';
import axios from 'axios';
import { useState } from 'react';
function Card (props){
    let i=0
    let [msg , setMsg] = useState("");

    const {downloadInvoice} = props;

    async function orderProduct(e){
        try{
            e.preventDefault();
            setMsg("Loading...");
            let url = 'http://localhost:8000/api/v1/order'
            await axios.post(url,props);
            // alert('order successfull added')
            setMsg("Order success");            
            //after order success we generate the invoice
            setTimeout(() => {
                setMsg("Generating Invoice...");
            }, 1000);
            await getInvoice();
            await downloadInvoice();
            setTimeout(() => {
                setMsg("");
            }, 2000);
        }
        catch(err){
            console.log("Error while order product req ",err);
            if(
                err.response && 
                err.response.status >=400 && 
                err.response.status<=500
                ){
                    console.log(err.response.data.message);
                    setMsg(err.response.data.message)
                }
        }
    }

    async function getInvoice(){
        try{
            await axios.post('http://localhost:8000/api/v1/getInvoice',props);
            setMsg("Invoice Generated");
        }
        catch(err){
            if(err){
                console.log("Error occur while invoice ",err);
            }
        }
        
    }



    return(
        <>
            <div key ={i++} className="productCard">
                <div className="productCard_header">
                <img src={props.image} alt='product-img' className="productCard_img" />
                </div>
                                
                <div className="productCard_details">
                    <h5 className="productName">{props.SysListName}</h5>
                    <div className="productCard_priceStack">
                        <h2 className="price">{props.MRP} Rs</h2>
                        <span className="text-warning fw-bolder ms-1 ">{msg}</span>
                        {/* <span>
                            <button onClick={()=>props.handleCart(props)} className="add">+</button>
                            <span className='qty'>
                                {props.Unit}
                            </span>
                            <button onClick={()=>props.removeCart(props)} className="remove">-</button>
                        </span> */}
                    </div>
                </div>
                <button type='submit' className='addToCartBtn' onClick={()=>props.handleCart(props)}>Add To Cart</button>
                <button type='submit' className='buyBtn' onClick={orderProduct} >Buy</button>
            </div>
        </>
    )
}

export default Card;