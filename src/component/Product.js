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
                    downloadInvoice={props.downloadInvoice}
                    keys={product.keys}
                    DSIN={product.DSIN}
                    SysListName={product.SysListName}
                    MRP={product.MRP}
                    HSNCode={product.HSNCode}
                    GSTSlab={product.GSTSlab}
                    Unit={product.Unit}
                    image = {product.image}
                    handleCart = {props.handleCart}
                    removeCart = {props.removeCart}
                     />
                })
            }
        </div>
    )
}

export default Product;