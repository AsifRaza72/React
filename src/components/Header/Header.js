import React from 'react'
import {Link} from 'react-router-dom'
import img from "../Images/logo.png"
import "../Header/Header.css"
import  CartIcon from '../UI/Carts/CartIcon'
const Header=()=>{
    return(
        <div className='Header'>
        <img src={img} alt=''/>
       
         <button className='btn1'><Link to="/Login">Log in </Link> </button>
       <button className='btn2'>Sign up</button>
        <button className='button'>
        <span className='icon'>
            <CartIcon/>
        </span>

        </button>

        </div>
    )
}
export default Header