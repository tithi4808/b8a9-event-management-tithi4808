import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';

const Navbar = () => {
  const {User,logout}=useContext(AuthContext)
  
          
          
          
          

  const handlelogout=()=>{
      logout()
      .then(result=>{
          console.log(result.user)
      })
      .catch(error=>{
          console.log(error.message)
      })
  }

    const links=<>
        
       
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/Events'>Events</NavLink>
        <NavLink to='/Contact'>Contacts</NavLink>
        
        
       

    </>
    return (
        <div className="navbar bg-gradient-to-r from-cyan-200 to-blue-200 py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><span className='font-bold text-3xl'>Wink</span> <span className='text-sm mt-3'>Events Management</span></a>
        </div>
        <div className="  hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
          <div className='font-semibold space-x-4 text-lg'>
          {links}
          </div>
          </ul>
        </div>
        <div className="navbar-end ">
          {
            User? <div className='hidden md:inline-block md:flex space-x-2'>
              <div className='border-2 flex px-2 py-2 '>
                <img className='w-12 h-12 mr-2 rounded-full' src={User.photoURL} alt="" />
                <p className='text-lg text-center flex justify-center items-center'>{User.displayName}</p>
              </div>
              <button className='text-xl hover:bg-sky-300 hover:text-white font-semibold mr-6 border-2 py-1 px-4' onClick={handlelogout}>Logout</button>
            </div> :<NavLink className='text-xl font-semibold mr-6 border-2 py-2 px-4' to='/login'>Login</NavLink>
          }
        </div>
        <div className='navbar-end md:hidden'>
        <NavLink className='text-xl font-semibold mr-6 border-2 py-2 px-4' to='/login'>Login</NavLink>
        </div>
      </div>
    );
};

export default Navbar;