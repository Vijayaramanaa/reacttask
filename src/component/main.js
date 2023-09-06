import React from 'react'
import vjpic from './vjpic.jpg'

function Main() {
  return (
    <div className=' flex flex-col p-12 w-auto h-auto bg-gradient-to-r from-violet-500 to-fuchsia-500  justify-center '>
      <div>
        <h1 className='text-center font-serif font-semibold p-5 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>Welcome to my PortFolio</h1>
        <div className='flex justify-center'>
          <div >
        <img src={vjpic} className='w-auto m-3  hover:grayscale mt-10  rounded-full '/></div>
        <div className='text-center justify-center item-center  p-10 '>
        <h2 className='p-3 font-serif font-semibold font tracking-wide text-2xl text-yellow-400 drop-shadow-2xl '>Name : Vijayaramanaaa L.G </h2>
        <h3 className='pb-2 font-serif font-semibold font tracking-wide text-zinc-300 text-sm'>Aspiring Front-End Developer</h3>
        <div className='flex flex-col md:w-50 md:mt-10  border-4 bg-gradient-to-r from-zinc-500 to-violet-500  border-orange-200 p-2 text-center justify-center item-center w-auto  gap-3'>
          <div className='flex justify-center'>
          <h2 className='m-2 p-2 text-center w-40 border-4 font-serif  border-red-500/100 bg-green-400 font-semibold'>Summary</h2></div>
        <p className='font-semibold text-rose-100 drop-shadow-md font-serif justify-center'>Seeking for a beigneer role to enhance and explore my technical and  non-technical knowledge gained at Anna University and self-learned skills.I belive in smart work with enthusiastic and always to learn new things and improving</p>
        </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main