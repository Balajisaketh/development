import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';
import Layout from './Layout';
import Mdata from './Mdata';
import Purifiers from './Purify';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}/>
          <Route path="/login" element={<Login />} /> 
          <Route path="/layout" element={<Layout />} /> 
          <Route path='/data' element={<Mdata />}/>
          <Route path='/filters' element={<Purifiers/>}/>
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
