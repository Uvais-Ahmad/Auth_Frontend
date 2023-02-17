import './Product.css';
import axios from 'axios';
function Card (props){
    let i=0

    async function orderProduct(e){
        try{
            e.preventDefault();
            let url = 'http://localhost:8000/api/v1/order'
            let order = await axios.post(url,props);
            alert('order successfull added')
            console.log("Order ",order);
            
            await handleBut();
        }
        catch(err){
            console.log("Error while order product req ",err);
            if(
                err.response && 
                err.response.status >=400 && 
                err.response.status<=500
                ){
                    console.log(err.response.data.message);
                }
        }
    }

    async function handleBut(){
        try{
            await axios.post('http://localhost:8000/api/v1/getInvoice',props);
            console.log("Pdf created we call via axios");
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
                        <p className="sales">{12+i*2} units sold</p>
                    </div>
                </div>
                <button type='submit' className='addToCartBtn' onClick={()=>props.handleCart(props)}>Add To Cart</button>
                <button type='submit' className='buyBtn' onClick={orderProduct} >Buy</button>
            </div>
        </>
    )
}

export default Card;