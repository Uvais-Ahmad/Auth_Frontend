import './Product.css';
function Card (props){
    let i=0
    return(
        <>
            <div key ={i++} className="productCard">
                <div className="productCard_header">
                <img src={props.image} alt='product-img' className="productCard_img" />
                </div>
                
                
                <div className="productCard_details">
                    <h5 className="productName">{props.name}</h5>
                    <div className="productCard_priceStack">
                        <h2 className="price">{props.price} Rs</h2>
                        <p className="sales">{props.totalSales} units sold</p>
                    </div>
                    <div className="productCard_rating">Rating : {props.rating} star</div>

                </div>
                <button type='submit' onClick={()=>props.handleCart(props)}>Add To Cart</button>
            </div>
        </>
    )
}

export default Card;