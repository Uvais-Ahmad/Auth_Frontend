import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import LogIn from './component/LogIn';
import Register from './component/Register';
import AddOrder from './component/AddOrder';
import { useEffect, useState } from 'react';
import GetOrder from './component/GetOrder';

function App() {

  const [user , setUser] = useState();

  useEffect( () => {
    console.log("User state in APP",user);
  })

  return (
    <div className="App">
      
      <BrowserRouter >
      <Home user={user}/>
        <Routes>
          <Route path='/login-user' element={ <LogIn handleUser = {setUser}/> }/>
          <Route path='/add-user' element={ <Register /> }/>
          <Route path='/add-order' element={ <AddOrder user = {user}/> }/>
          <Route path='/get-order' element={ <GetOrder /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
