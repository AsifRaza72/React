import React from 'react'
// import { Link } from 'react-router-dom'
import "../Header/TopBanner.css"
import img from "../Images/foodpanda-transparent-bag-remove-background-removebg-preview (1).png"
import Header from './Header'



const TopBanner=(props)=> {
  return (
    <div className='a'>

<ul className='top-pink-banner'>
<img src={img} alt='img'className='img'/>
<p>Do You Need a business account?</p>
<button>SIGN UP NOW</button>
{/* <li ><Link to="/Home" ><b>LIGIN</b></Link></li> */}
{/* <li><Link to="/Aboutus" ><b>About Us</b></Link></li>
<li><Link to="/Contactus" ><b>Contact Us</b></Link></li> */}
</ul>
<Header />

    </div>
  )
}
export default TopBanner
