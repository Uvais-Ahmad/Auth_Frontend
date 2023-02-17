import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";

function Checkout(props){
    const {checkout} = props;
    let i=0;
    const [msg , setMsg] = useState("");
    const {downloadInvoice} = props

    async function getInvoice(data){
        try{ 
            setMsg("wait , pdf is generating")
            await axios.post('http://localhost:8000/api/v1/getInvoice',data);
        
            setMsg("Generated successfully");
            
            await downloadInvoice();

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


    // async function downloadInvoice(){
    //     setMsg("Fetching Invoice...");
    //     const apiUrl = 'http://localhost:8000/api/v1/downloadInvoice';
    //     let response = await axios.get(apiUrl , {
    //                         responseType:'blob',
    //                         headers:{
    //                             'Accept':'application/pdf'
    //                         }
    //                     });
    //     const fileName = 'Invoice.pdf';
    //     const blobObj = new Blob([response.data],{type:'application/pdf'});
    //     const anchorLink = await document.createElement('a');
    //     anchorLink.href = await window.URL.createObjectURL(blobObj);
        
    //     await anchorLink.setAttribute('download',fileName);
    //     anchorLink.click();
    //     setMsg("Downloaded");
    // }

    return (
        <>
        {checkout.length === 0 && <h1 className="text-info mx-auto text-secondary">No order yet</h1> }
        <span className="text-warning fs-3 fw-bolder ms-3 ">{msg}</span>
        {   
            checkout.map(item => (
                
                <div key={i++} className='mt-3 ms-2 p-3 shadow' style={{width:'50vw',backgroundColor:'#073980',borderRadius:'10px'}}> 
                    <h2 style={{}} className='text-info' key={i++}>~{props.user.data.data.name}</h2>
                    {item.cartItem.map(subItem => (
                        <div key={i++}>
                            <h6 className='ms-3 text-white'><span className='text-success fw-bolder'>Product Name : </span>{subItem.SysListName}<span className='text-success fw-bolder'> with Quantity :  </span>{subItem.Unit}</h6>
                            <h6 className='text-success ms-3'>Status : Ordered success</h6>
                            <hr></hr>
                        </div>
                         
                    ))}
                   <Button onClick={()=>getInvoice(item.cartItem)}>Get Invoice</Button>
                </div >
                
            ))
        }

        </>
    )
}

export default Checkout;