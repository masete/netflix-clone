import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between pr-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <button className='text-white pr-4 '>Sign In</button>
            <button className='text-white px-6 bg-red-600 rounded py-2'>Sign Up</button>
        </div>
    </div>
  )
}

export default NavBar