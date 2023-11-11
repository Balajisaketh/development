
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Layout from './Layout';
import Mdata from './Mdata';
import Purifiers from './Purify';
import Cartdata from './Cartdata';
import Chimneys from './Chimney';
import Frontload from './Frontload';
import Topload from './Topload';
import Proddescription from './components/proddescription';
import Stoves from './Stoves';
import Washingmachinepowders from './Washingpowders'
import Orders from './Orders';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} /> 
          <Route path="/chimneys" element={<Chimneys/>} /> 
          <Route path='/data' element={<Mdata />}/>
          <Route path='/waterfilters' element={<Purifiers/>}/>
          <Route path='/frontloadliquids' element={<Frontload/>}/>
          <Route path='/cart' element={<Cartdata/>}/>
          <Route path='/toploadliquids' element={<Topload/>}/>
          <Route path='/stove' element={<Stoves/>}/>
          <Route path='/washingpowders' element={<Washingmachinepowders/>}/>
          <Route path="/product/:uid" element={<Proddescription/>} />
          <Route path="/orders" element={<Orders/>} />

          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
