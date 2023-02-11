import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import LogIn from './component/LogIn';
import Register from './component/Register';
import { useState } from 'react';
import AddOrder from './component/AddOrder';
import NavvBar from './component/NavBar';
import Protected from './component/Protected';
import Product from './component/Product';
import productData from './content';
import Bucket from './component/Bucket';
import Checkout from './component/Checkout';

function App() {
  
  const [user , setUser] = useState();
  const [cartItem , setCartItem] = useState([]);
  const [checkoutItems , setCheckout] = useState([]);

  //add to cart from product
  function handleAddToCart(product){

    let productExist = cartItem.find(item => item.keys === product.keys)
    if(productExist){
      //we increse the qty of existing product
      setCartItem( cartItem.map( item => 
        (item.keys === product.keys ? {...productExist , qty : productExist.qty+1 } :item)
      ));
    
    }
    else{
      setCartItem([...cartItem,{...product , qty:1}]);
    }
    
  }
  // remove a particular cart item
  function handleRemoveCart(product){
    let productExist = cartItem.find(item => item.keys === product.keys)
    //it means now we should remove from cart
    if(productExist.qty === 1){
      setCartItem(cartItem.filter(item=> item.keys !== product.keys))
    }
    else{
      setCartItem(cartItem.map(item =>(
        item.keys === product.keys ? {...productExist , qty : productExist.qty -1} : item
      )))
    }
  }
  //add all cartItem to checkout item
  async function handleCheckout(){
    await setCheckout([...checkoutItems,{cartItem:cartItem}]);
    await setCartItem([]);  
}

  return (
    <div className="App">
      
      <BrowserRouter >
      <NavvBar user = {user}  handleUser = {setUser} countCartItem = {cartItem.length}/>
        <Routes>
          <Route path='/' element={ <Protected Component={Product} handleCart={handleAddToCart}/>} />
          <Route path='/login-user' element={ <LogIn handleUser = {setUser}/> }/>
          <Route path='/add-user' element={ <Register /> }/>
          <Route path='/add-order' element={user ? <AddOrder user = {user}/> : <Navigate to='/login-user'/> }/>
          <Route path='/CART' element={user ? <Bucket handleCheckout={handleCheckout} checkout={checkoutItems} setCheckout = {setCheckout}  user={user} cartItem={cartItem} handleCart={handleAddToCart} removeCart={handleRemoveCart}/> : <Navigate to='/login-user'/>}/>
          <Route path='/checkout' element={user ? <Checkout checkout={checkoutItems} setCheckout = {setCheckout} user = {user}/> : <Navigate to='/login-user'/> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
