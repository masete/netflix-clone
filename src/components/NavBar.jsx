import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between pr-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
        
        <div>
          <Link to='/login'>
                <button className='text-white pr-4 '>
                  Sign In
                </button>
              </Link>
              <Link to='/logout'>
                <button className='text-white px-6 bg-red-600 rounded py-2'>
                  Sign Up
                </button>
              </Link>
            
            
        </div>
    </div>
  )
}

export default NavBar