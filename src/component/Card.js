import './Product.css';
import axios from 'axios';
import { useState } from 'react';
function Card (props){
    let i=0
    let [msg , setMsg] = useState("");

    async function orderProduct(e){
        try{
            e.preventDefault();
            setMsg("Loading...");
            // let url = 'http://100.26.232.24/api/v1/order'
            let url = 'https://mern-invoice.up.railway.app/api/v1/order'
            // let url = 'https://invoicegenerate.onrender.com/api/v1/order'
            await axios.post(url,props);
            // alert('order successfull added')
            setMsg("Order success");            
            //after order success we generate the invoice
            setTimeout(() => {
                setMsg("Generating Invoice...");
            }, 1000);
            await getInvoice();
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
            // let url = 'http://100.26.232.24/api/v1/getInvoice'
            let url = 'https://mern-invoice.up.railway.app/api/v1/getInvoice'

            setMsg("Fetching Invoice...");
            let response = await axios.post(url ,props , {
                                responseType:'blob',
                                headers:{
                                    'Accept':'application/pdf'
                                }
                            });
            const fileName = 'Invoice.pdf';
            const blobObj = new Blob([response.data],{type:'application/pdf'});
            const anchorLink = await document.createElement('a');
            anchorLink.href = await window.URL.createObjectURL(blobObj);
            
            await anchorLink.setAttribute('download',fileName);
            anchorLink.click();
            setMsg("Downloaded");
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
                    </div>
                </div>
                <button type='submit' className='addToCartBtn' onClick={()=>props.handleCart(props)}>Add To Cart</button>
                <button type='submit' className='buyBtn' onClick={orderProduct} >Buy</button>
            </div>
        </>
    )
}

export default Card;