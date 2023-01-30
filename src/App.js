import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import LogIn from './component/LogIn';
import Register from './component/Register';
import AddOrder from './component/AddOrder';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
        <Routes>
        <Route path='/' element={ <Home /> }/>
          <Route path='/login-user' element={ <LogIn /> }/>
          <Route path='/add-user' element={ <Register /> }/>
          <Route path='/add-order' element={ <AddOrder /> }/>
          <Route path='/get-order' element={ <LogIn /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
