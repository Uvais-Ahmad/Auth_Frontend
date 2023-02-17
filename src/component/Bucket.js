import './Bucket.css';
import Table from 'react-bootstrap/Table';

function Bucket (props) {
    const {cartItem  , handleCart , removeCart , handleCheckout , msg} = props;

    let itemPrice = cartItem.reduce( (a , c )=> a+c.MRP*c.Unit , 0);
    let discount = itemPrice*.2;
    let amount = itemPrice - discount;
    let taxPrice = amount*0.18;
    let totalPrice = amount + taxPrice;
    let i=0;


    return (
        <>
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
                        <td>{item.SysListName}</td>
                        <td>
                            <button onClick={()=>handleCart(item)} className="add">+</button>
                            <span className='qty'>
                                {item.Unit}
                            </span>
                            <button onClick={()=>removeCart(item)} className="remove">-</button>
                        </td>
                        <td>{item.MRP}</td>
                        <td>{item.Unit*item.MRP}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
            }

            {
                cartItem.length !== 0 && (
                    <div className='checkout'>
                    <hr></hr>
                    <div className='row fs-5'>
                        <div className='col-2'>Item Price</div>
                        <div className='col-1 text-right'>{itemPrice.toFixed(2)}</div>
                    </div>
                    <div className='row fs-5'>
                        <div className='col-2'>Discount 20%</div>
                        <div className='col-1 text-right'>{discount.toFixed(2)}</div>
                    </div>

                    <div className='row fs-5'>
                        <div className='col-2'>Amount </div>
                        <div className='col-1 text-right'>{amount.toFixed(2)}</div>
                    </div>
                    <div className='row fs-5'>
                        <div className='col-2'>Tax Price</div>
                        <div className='col-1 text-right'>{taxPrice.toFixed(2)}</div>
                    </div>
                    
                    <div className='row'>
                        
                        <div className='col-2 fw-bolder text-info fs-4'>Total Price </div>
                        <div className='col-1 text-right fw-bolder text-info fs-4'>{totalPrice.toFixed(2)}</div>
                    </div>
                    
                    <div className='row'>
                    <span className="text-warning fw-bolder fs-5 ms-1 ">{msg}</span>
                        <button className='btn btn-success w-25 fs-5 fw-bold' onClick={()=>handleCheckout()}>Checkout</button>
                    </div>
                    </div>
                )
            }
        </>
    )
}

export default Bucket;