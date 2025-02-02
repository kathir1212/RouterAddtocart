import Amazon from '../assets/amazon.png'
import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/cart-icon-16.png'

function Header() {


  return (
    <>
     <div className='headersession'>
<div className='header p-2  flex  shadow-lg justify-center items-center'>
<div className='logo flex-1'>
     <img src={Amazon} alt="" className='w-[100%]'/>  
</div> 
<div className='menu flex-4'>
<Link to="/" className='p-[10%]'><b>Home</b></Link>
<Link to="/addtocart" className='p-[10%]'><b>About</b></Link>
<Link to="/contact" className='p-[10%]'><b>Contact</b></Link>


  
</div>
<div className='loginRegister flex flex-1 md:gap-[2%] sm:gap-[5%]'>
    <div className='login flex-1'>

    </div>
<Link to="/addtocart">
<div className='Signup flex-1'>
<img src={icon} alt="" className='w-[30%]' />
    </div>
</Link>
    

</div>
</div>

     </div>

    </>
  )
}

export default Header
