import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';
import Layout from './Layout';
import Mdata from './Mdata';
import Purifiers from './Purify';
import Cartdata from './Cartdata';
import Filterslayout from './Filterslayout';
import Chimneys from './Chimney';
import Frontload from './Frontload';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
          <Route path="/login" element={<Login />} /> 
          <Route path="/chimneys" element={<Chimneys/>} /> 
          <Route path="/layout" element={<Layout />} /> 
          <Route path='/data' element={<Mdata />}/>
          <Route path='/filters' element={<Purifiers/>}/>
          <Route path='/frontloadliquid' element={<Frontload/>}/>
          <Route path='/cart' element={<Cartdata/>}/>
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
