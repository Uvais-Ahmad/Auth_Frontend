import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import LogIn from './component/LogIn';
import Register from './component/Register';
import { useState } from 'react';
import NavvBar from './component/NavBar';
import Protected from './component/Protected';
import Product from './component/Product';
import Bucket from './component/Bucket';
import Checkout from './component/Checkout';
import axios from 'axios';

function App() {
  
  const [user , setUser] = useState();
  const [cartItem , setCartItem] = useState([]);
  const [checkoutItems , setCheckout] = useState([]);

  //add to cart from product
  function handleAddToCart(product){

    console.log("HandleAddTocart",product)

    let productExist = cartItem.find(item => item.keys === product.keys)
    if(productExist){
      //we increse the qty of existing product
      setCartItem( cartItem.map( item => 
        (item.keys === product.keys ? {...productExist , Unit : productExist.Unit+1 } :item)
      ));
    
    }
    else{
      setCartItem([...cartItem,{...product , Unit:1}]);
    }
    
  }
  // remove a particular cart item
  function handleRemoveCart(product){
    console.log("Handleremovecart",product)
    let productExist = cartItem.find(item => item.keys === product.keys)
    //it means now we should remove from cart
    console.log("Exist ",productExist)
    if(productExist.Unit === 1){
      setCartItem(cartItem.filter(item=> item.keys !== product.keys))
    }
    else{
      setCartItem(cartItem.map(item =>(
        item.keys === product.keys ? {...productExist , Unit : productExist.Unit -1} : item
      )))
    }
  }
  //add all cartItem to checkout item and Store all item in Database
  async function handleCheckout(){
    //here we passs cart item for storign in database 
    try{
      let url = 'http://localhost:8000/api/v1/order'
      let order = await axios.post(url,cartItem);
      
      console.log("Order ",order);
      await setCheckout([...checkoutItems,{cartItem:cartItem}]);
      await setCartItem([]); 
      alert('order successfull added') 
  }
  catch(err){
      console.log("Error while order product req ",err);
      if(
          err.response && 
          err.response.status >=400 && 
          err.response.status<=500
          ){
              console.log(err.response.data.message);
          }
  }

    
}

  return (
    <div className="App">
      
      <BrowserRouter >
      <NavvBar user = {user}  handleUser = {setUser} countCartItem = {cartItem.length}/>
        <Routes>
          <Route path='/' element={ <Protected Component={Product} user={user} handleCart={handleAddToCart} removeCart={handleRemoveCart}/>} />
          <Route path='/login-user' element={ <LogIn handleUser = {setUser}/> }/>
          <Route path='/add-user' element={ <Register /> }/>
          
          <Route path='/CART' element={user ? <Bucket handleCheckout={handleCheckout} checkout={checkoutItems} setCheckout = {setCheckout}  user={user} cartItem={cartItem} handleCart={handleAddToCart} removeCart={handleRemoveCart}/> : <Navigate to='/login-user'/>}/>
          <Route path='/checkout' element={user ? <Checkout checkout={checkoutItems} setCheckout = {setCheckout} user = {user}/> : <Navigate to='/login-user'/> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
