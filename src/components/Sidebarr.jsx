
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faChartPie, faChevronDown, faCircleQuestion, faGear, faLightbulb, faVenus, faUserGroup, faDollar, faBell, faMicrophone, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
function Sidebarr() {
    const [toogle, settoogle] = useState(true)
    const [toogle1, settoogle1] = useState(true)
    const [toogle2, settoogle2] = useState(true)
    const [toogle3, settoogle3] = useState(true)
    const [toogle_sub, settoogle_sub] = useState(true)
    const [toogle_reports, settoogle_reports] = useState(true)
    const [toogle_payout, settoogle_payout] = useState(true)
    const [toogle_approvals, settoogle_approvals] = useState(true)
    const router=useNavigate()
    const getfilteredprods=(dataval,routedata)=>{
        console.log(dataval,routedata,"i m data route")
        router('/'+routedata + "?category=" + dataval)
       }
    return (
        <>

            <div className='h-auto bg-white z-40 shadow-xl w-auto'>

                <ul className=' h-auto z-10 w-auto py-5 px-4   overflow-hidden text-left border border-1 border-gray-500 rounded-md'>

                    
                   <li className='m-3' onClick={()=>getfilteredprods("waterfilter","waterfilters")}>Water Purifiers</li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>getfilteredprods("chimneys","chimneys")}>Chimney</li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>getfilteredprods("frontload","frontloadliquids")}>FrontLoad Liquids</li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>getfilteredprods("topload","toploadliquids")}>TopLoad Liquids</li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>getfilteredprods("washingpowders","washingpowders")}>Washing Powders</li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>getfilteredprods("stove","stove")}>Stoves </li>
                   <hr className='bg-gray-100 h-1'></hr>
                   <li className='m-3' onClick={()=>router("/orders")}>Your Orders</li>

                    
                   

                </ul>

            </div>

        </>
    )

}

export default Sidebarr