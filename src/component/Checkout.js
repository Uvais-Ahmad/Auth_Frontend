import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Checkout(props){
    const {checkout} = props;
    console.log("Checkout in checkout ",checkout)
    let i=0;

    const [msg , setMsg] = useState("");

    async function getInvoice(data){
        try{ 
            setMsg("wait , pdf is generating")
            await axios.post('http://localhost:8000/api/v1/getInvoice',data);
            console.log("Pdf created we call via axios");
            setMsg("Generated successfully");
            setTimeout(() => {
                setMsg("")
            }, 2000);
        }
        catch(err){
            if(err){
                setMsg("Error while generating");
                setTimeout(() => {
                    setMsg("")
                }, 2000);
                console.log("Error occur while invoice ",err);
            }
        }
        
    }


    return (
        <>
        {checkout.length === 0 && <h1 className="text-info mx-auto text-secondary">No order yet</h1> }
        {
            checkout.map(item => (
                
                <div key={i++} className='mt-3 ms-2 p-3 shadow' style={{width:'50vw',backgroundColor:'#073980',borderRadius:'10px'}}> 
                    <h2 style={{}} className='text-info' key={i++}>~{props.user.data.data.name}</h2>
                    {console.log("Item in react ",item.cartItem)}
                    {item.cartItem.map(subItem => (
                        <div key={i++}>
                            <h6 className='ms-3 text-white'><span className='text-success fw-bolder'>Product Name : </span>{subItem.SysListName}<span className='text-success fw-bolder'> with Quantity :  </span>{subItem.Unit}</h6>
                            <h6 className='text-success ms-3'>Status : Ordered success</h6>
                            <hr></hr>
                        </div>
                         
                    ))}
                   <Button onClick={()=>getInvoice(item.cartItem)}>Get Invoice</Button>
                   <span className="text-warning fw-bolder ms-3 ">{msg}</span>
                </div >
                
            ))
        }

        </>
    )
}

export default Checkout;