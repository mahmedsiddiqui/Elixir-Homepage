import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <nav>
        <div><img src="https://elixir.com/hubfs/Elixir_December2023/Images/header_logo.svg" alt="" /></div>
        <div>
          <ul>
            <li>Product</li>
            <li>Industries</li>
            <li>Resources</li>
            <li>About Us</li>
            <li>Support </li>
          </ul>
        </div>
        <div className='icon' >
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <button  className='nav-btn' >Request Demo</button>
        </div>
    </nav>
    
    </>
  )
}

export default Navbar
