import { BrowserRouter, Route, Routes ,Navigate} from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import LogIn from './component/LogIn';
import Register from './component/Register';
import AddOrder from './component/AddOrder';
import { useEffect, useState } from 'react';
import GetOrder from './component/GetOrder';
import NavvBar from './component/NavBar';
import Protected from './component/Protected';
import Product from './component/Product';
import productData from './content';
import Bucket from './component/Bucket';

function App() {
  
  const [user , setUser] = useState();
  const [cartItem , setCartItem] = useState([]);

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

  useEffect( () => {
    console.log("User state in APP",user);
  })

  return (
    <div className="App">
      
      <BrowserRouter >
      <NavvBar user = {user}  handleUser = {setUser} countCartItem = {cartItem.length}/>
        <Routes>
          <Route path='/' element={ <Protected Component={Product} user={user} handleCart={handleAddToCart}/>} />
          <Route path='/login-user' element={ <LogIn handleUser = {setUser}/> }/>
          <Route path='/add-user' element={ <Register /> }/>
          <Route path='/add-order' element={user ? <AddOrder user = {user}/> : <Navigate to='/login-user'/> }/>
          <Route path='/CART' element={user ? <Bucket cartItem={cartItem} handleCart={handleAddToCart} removeCart={handleRemoveCart}/> : <Navigate to='/login-user'/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
