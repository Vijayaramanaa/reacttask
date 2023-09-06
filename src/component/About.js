import React from 'react'

export default function About() {
    
  return (
    <div className='bg-red-100 grid grid-cols-2 md:grid-cols-4 p-12 '>
    <div >
      <div className=' p-2 card rounded-lg  bg-zinc-100   shadow-lg  m-5 '>  <h1 className='font-serif text-center text-red-900 font-semibold p-2'>Education </h1>
        <p className='font-serif p-2 '>BE/CSE : C.Abdul Hakeem College of Engineering and Technology - Melvisharam</p>
        <p className='font-serif p-2 '> Hsc : GVC Hr Sec School</p>
        </div>
    </div>
    <div >
      <div className='card rounded-lg  bg-zinc-100  shadow-lg  p-2 m-5  '>  <h1 className='font-serif text-center text-red-900 font-semibold p-2'>Skills </h1>
        <ul className='p-2 font-serif list-disc list-inside space-y-2'><li>Python</li>
        <li>HTML</li>
        <li>CSS - TailwindCSS</li>
        <li>JS</li>
        <li>React.Js</li>
        <li>PHP</li>
        <li>MySQL</li>
        </ul></div>
    </div>
    <div >
      <div className='card rounded-lg  bg-zinc-100  shadow-lg  p-2 m-5  '>  <h1 className='font-serif text-center text-red-900 font-semibold p-2'>Languages Known</h1>
      <ul className='p-2 font-serif list-disc list-inside space-y-2'><li>English</li>
        <li>Tamil</li>
        <li>Hindi</li>
        <li>Telugu</li>
        
        </ul></div>
    </div>
    <div >
      <div className='card rounded-lg  bg-zinc-100  shadow-lg  p-2 pl-6 m-5  '>  <h1 className='font-serif text-center text-red-900 font-semibold p-2'>Certification </h1>
      <ul className='p-2 font-serif list-disc list-outside  space-y-2'><li >Python , MySQL Certification from Apollo CSE - Institution </li>
        <li>Self Learned Skills on WEB DEVELOPMENT</li>
        <li>Interview Skills from TCSion</li>
       
        </ul></div>
    </div>
    </div>
  )
}
