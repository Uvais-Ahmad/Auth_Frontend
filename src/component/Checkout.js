function Checkout(props){
    const {checkout , setCheckout} = props;
    console.log("Checkout in checkout ",checkout)
    return (
        <>
        <h1 className="text-info">CheckOut Page</h1>
        {
            checkout.map(item => (
                <>  <hr></hr>
                    <h1>{props.user.data.data.name}</h1>
                    {item.cartItem.map(subItem => (
                        <>
                            <h3 key={item.keys}>{subItem.name} and qty {subItem.qty}</h3>
                        </>
                    ))}
                </>
            ))
        }

        </>
    )
}

export default Checkout;