import './Product.css';
function Card (props){
    return(
        <>
            <div keys   ={props.key} className="productCard">
                <div className="productCard_header">
                <img src={props.image} alt='product-img' className="productCard_img" />
                </div>
                
                
                <div className="productCard_details">
                    <h4 className="productName">{props.name}</h4>
                    <div className="productCard_priceStack">
                        <h5 className="price">{props.price} Rs</h5>
                        <p className="sales">{props.totalSales} units sold</p>
                    </div>
                    <p className="productCard_rating">{props.rating} star</p>

                </div>
                <button type='submit' onClick={()=>props.handleCart(props)}>Add To Cart</button>
            </div>
        </>
    )
}

export default Card;