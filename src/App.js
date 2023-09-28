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
import Topload from './Topload';
import Proddescription from './components/proddescription';
import Stoves from './Stoves';
import Washingmachinepowders from './Washingpowders'
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} /> 
          <Route path="/chimneys" element={<Chimneys/>} /> 
          <Route path='/data' element={<Mdata />}/>
          <Route path='/filters' element={<Purifiers/>}/>
          <Route path='/frontloadliquids' element={<Frontload/>}/>
          <Route path='/cart' element={<Cartdata/>}/>
          <Route path='/toploadliquids' element={<Topload/>}/>
          <Route path='/stove' element={<Stoves/>}/>
          <Route path='/washingpowders' element={<Washingmachinepowders/>}/>
          <Route path="/product/:uid" element={<Proddescription />} />


          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
