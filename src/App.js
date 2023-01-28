import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import LogIn from './component/LogIn';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
      <Home />
        <Routes>
          <Route path='/login-user' element={ <LogIn /> }/>
          <Route path='/add-user' element={ <LogIn /> }/>
          <Route path='/add-order' element={ <LogIn /> }/>
          <Route path='/get-order' element={ <LogIn /> }/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
