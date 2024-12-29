import React from 'react'
import {  Link, NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='flex justify-between items-center flex-row p-8 text-4xl font-bold gap-10 text-[#00] px-5'>
      <Link to="/">Home</Link>
      <ul className='flex justify-center items-center flex-row p-8 text-4xl font-bold gap-10 text-[#00]'>
      <li><NavLink to="/byd">BYD</NavLink></li>
      <li><NavLink to="/kia">KIA</NavLink></li>
      <li><NavLink to="/opel">OPEL</NavLink></li>
      <li><NavLink to="/hyundai">HYUNDAI</NavLink></li>
      <li></li>
    </ul>
    </div>
    
  )
}

export default Navbar