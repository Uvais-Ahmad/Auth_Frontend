import Card from './Card';
import './Product.css';
import productData from '../content';
function Product(props) {
    let i =0;
    return(
        <div className="productCard_List">
            {
                productData.map( product=>{
                    return <Card key={i++}
                    keys={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    totalSales={product.totalSales}
                    timeLeft={product.timeLeft}
                    rating={product.rating}
                    handleCart = {props.handleCart}
                     />
                })
            }
        </div>
    )
}

export default Product;