function Bucket (props) {
    console.log("Bucket ",props)
    const {cartItem  , handleCart , removeCart} = props;
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
        </>
    )
}

const style = {
    color:'white'
}
export default Bucket;