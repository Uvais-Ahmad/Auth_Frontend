function Checkout(props){
    const {checkout , setCheckout} = props;
    console.log("Checkout in checkout ",checkout)
    let i=0;
    return (
        <>
        {checkout.length === 0 && <h1 className="text-info mx-auto text-secondary">No order yet</h1> }
        {
            checkout.map(item => (
                <div className='mt-3 ms-2 p-3 shadow' style={{width:'50vw',backgroundColor:'#073980',borderRadius:'10px'}}> 
                    <h2 style={{}} className='text-info' key={i++}>-{props.user.data.data.name}</h2>
                    {item.cartItem.map(subItem => (
                        <>
                            <h6 className='ms-3 text-info' key={i++}><span className='text-success fw-bolder'>Product Name : </span>{subItem.name}<span className='text-success fw-bolder'> with Quantity :  </span>{subItem.qty}</h6>
                            <h6 className='text-success ms-3'>Status : Ordered success</h6>
                        </>
                    ))}
                </div >
            ))
        }

        </>
    )
}

export default Checkout;