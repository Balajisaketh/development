import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Purifiers from './Purify'
import React from 'react'
import useWindowSize from './hooks/useWindowsize'
function Filterslayout() {
    const windowSize=useWindowSize()
    console.log("hllo",windowSize)
    
if(windowSize.width>=425 && windowSize.width<768)
{
   <h1>mboile</h1>
}
else if(windowSize.width>820 && windowSize.width<=2560)
{
<h1>'knklapi</h1>
}
}

export default Filterslayout