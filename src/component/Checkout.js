function Checkout(props){
    const {checkout , setCheckout} = props;
    console.log("Checkout in checkout ",checkout)
    let i=0;
    return (
        <>
        <h1 className="text-info">CheckOut Page</h1>
        {
            checkout.map(item => (
                <>  <hr></hr>
                    <h1 key={i++}>{props.user.data.data.name}</h1>
                    {item.cartItem.map(subItem => (
                        <>
                            <h3 key={i++}>{subItem.name} and qty {subItem.qty}</h3>
                        </>
                    ))}
                </>
            ))
        }

        </>
    )
}

export default Checkout;