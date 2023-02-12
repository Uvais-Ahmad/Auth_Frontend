import axios from 'axios';
import './Bucket.css';
import Table from 'react-bootstrap/Table';

function Bucket (props) {
    const {cartItem  , handleCart , removeCart , handleCheckout} = props;
    let itemPrice = cartItem.reduce( (a , c )=> a+c.price*c.qty , 0);
    let taxPrice = itemPrice*0.14;
    let shippingPrice = itemPrice > 2000 ? 0 : 50;
    let totalPrice = itemPrice + taxPrice + shippingPrice;
    let i=0;


    return (
        <>
            {/* {cartItem.map( item => (
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
            ))} */}
            {cartItem.length === 0 && <h2 style={{color:'lightgrey',textAlign:'center',marginTop:'5vh'}}>Empty , no item added</h2>} 
            {cartItem.length !== 0 && <Table  bordered  className='w-75 mx-auto'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItem.map( item => (
                        <tr key={i++}>
                            <td>{item.keys}</td>
                        <td><img className='tableImg' src={item.image} alt="itemImg" /></td>
                        <td>{item.name}</td>
                        <td>
                            <button onClick={()=>handleCart(item)} className="add">+</button>
                            <span className='qty'>
                                {item.qty}
                            </span>
                            <button onClick={()=>removeCart(item)} className="remove">-</button>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.qty*item.price}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            }

            {
                cartItem.length !== 0 && (
                    <div className='checkout'>
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
                        
                        <div className='col-2 fw-bolder text-info fs-4'>Total Price </div>
                        <div className='col-1 text-right fw-bolder text-info fs-4'>{totalPrice.toFixed(2)}</div>
                    </div>
                    
                    <div className='row'>
                        <button className='btn btn-success w-25' onClick={()=>handleCheckout()}>Checkout</button>
                    </div>
                    </div>
                )
            }
        </>
    )
}

const style = {
    color:'white'
}
export default Bucket;