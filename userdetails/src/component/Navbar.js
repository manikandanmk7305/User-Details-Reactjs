import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
// import rem from '../component/rem.png'
export const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
        <nav className='navbar'>
        {/* <img src={rem} width={60} height={60} />      */}
        <h2> Recruitment Management System</h2>   
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/service'>service</NavLink>
        {auth.user==='admin' && <NavLink to='/product'>Admin</NavLink>}
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/Userdel'>Users Details</NavLink>
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}
        {!auth.user && <NavLink to='/login'>Login</NavLink>}
        {!auth.user && <NavLink to='/signup'>Signup</NavLink>}
        </nav>
    </div>
  )
}
