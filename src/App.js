import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import LogIn from './component/LogIn';
import Register from './component/Register';
import { useState } from 'react';
import NavvBar from './component/NavBar';
import Product from './component/Product';
import Bucket from './component/Bucket';
import Checkout from './component/Checkout';
import axios from 'axios';

function App() {
  
  const [user , setUser] = useState();
  const [cartItem , setCartItem] = useState([]);
  const [checkoutItems , setCheckout] = useState([]);
  const [msg , setMsg] = useState("");

  //add to cart from product
  function handleAddToCart(product){
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
      setMsg("Loading...")
      let url = 'http://localhost:8000/api/v1/order'
      await axios.post(url,cartItem);
      setMsg("Checkout Success...");
      
      await setCheckout([...checkoutItems,{cartItem:cartItem}]);
      await setCartItem([]); 
      setMsg("");
  }
  catch(err){
      console.log("Error while order product req ",err);
      if(
          err.response && 
          err.response.status >=400 && 
          err.response.status<=500
          ){
              console.log(err.response.data.message);
              setMsg(err.response.data.message)
          }
  }    
}

  return (
    <div className="App">
      
      <BrowserRouter >
      <NavvBar user = {user}  handleUser = {setUser} countCartItem = {cartItem.length}/>
        <Routes>
          
          <Route path='/login-user' element={ <LogIn handleUser = {setUser}/> }/>
          <Route path='/add-user' element={ <Register /> }/>
          
          <Route path='/' element={user ? <Product handleCart={handleAddToCart} removeCart={handleRemoveCart} user = {user}/> : <Navigate to='/login-user'/> }/>
          <Route path='/CART' element={user ? <Bucket handleCheckout={handleCheckout} checkout={checkoutItems} setCheckout = {setCheckout}  user={user} cartItem={cartItem} handleCart={handleAddToCart} removeCart={handleRemoveCart} msg ={msg}/> : <Navigate to='/login-user'/>}/>
          <Route path='/checkout' element={user ? <Checkout checkout={checkoutItems} setCheckout = {setCheckout} user = {user}/> : <Navigate to='/login-user'/> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
