import './Bucket.css';

function Bucket (props) {
    console.log("Bucket ",props)
    const {cartItem  , handleCart , removeCart} = props;
    let itemPrice = cartItem.reduce( (a , c )=> a+c.price*c.qty , 0);
    let taxPrice = itemPrice*0.14;
    let shippingPrice = itemPrice > 2000 ? 0 : 50;
    let totalPrice = itemPrice + taxPrice + shippingPrice;
    return (
        <>
            <h1 style={style}>Cart Item</h1>
            <div>{cartItem.length ==0 && <h2>Cart Is Empty</h2> }</div>
            {cartItem.map( item => (
                <div key={item.keys} className="row text-white" >
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>handleCart(item)} className="add">+</button>
                        <button onClick={()=>removeCart(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty } x {item.price.toFixed(2)}
                    </div>
                </div>
            ))}

            {
                cartItem.length !== 0 && (
                    <>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-2'>Item Price</div>
                        <div className='col-1 text-right'>{itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-1 text-right'>{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Shipping Price</div>
                        <div className='col-1 text-right'>{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className='row'>
                        <div className='col-2'>Total Price </div>
                        <div className='col-1 text-right fw-bolder'>{totalPrice.toFixed(2)}</div>
                    </div>
                    </>
                )
            }
        </>
    )
}

const style = {
    color:'white'
}
export default Bucket;