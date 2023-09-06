import React from 'react'


export default function Header() {
  return (
    <div className=' flex md-4 justify-between  text-sm  bg-gradient-to-r from-sky-500 to-indigo-500 relative '>
      <button  className='font-sans hover:font-serif font-semibold p-2 m-2 bg-white hover:bg-red-600 rounded-lg text-black hover:text-white cursor-pointer w-60 md:w-20 text-center justify-center'>Home</button>
      <h1 className='font-sans hover:font-serif font-semibold p-2 m-2 bg-white hover:bg-red-600 rounded-lg text-black hover:text-white cursor-pointer w-60 md:w-20 text-center'>About </h1>
      <h2 className='font-sans hover:font-serif font-semibold p-2 m-2 bg-white hover:bg-red-600 rounded-lg text-black hover:text-white cursor-pointer w-60 md:w-20 text-center'>Contact</h2>
    </div>
  )
}

