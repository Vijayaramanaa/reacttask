import React from 'react'
import { BsMailbox2,BsFillTelephoneInboundFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div className=' w-auto h-auto bg-amber-500 p-2 '>
        <h1 className='font-semibold font-serif p-4'>Contact Me Using</h1>
        <div className='flex justify-center'>
            <BsMailbox2  className='w-10 h-10 m-3'/>
            <h1 className='m-5 text-1xl text-red-50 font-serif font-semibold'>Mail us on :&nbsp; Vijayaramanaa207320@gmail.com</h1>
        </div>
        <div className='flex justify-center mr-40'>
            <BsFillTelephoneInboundFill  className='w-10 h-10 m-3'/>
            <h1 className='m-5 text-1xl text-red-50  font-semibold'>Contact us on :&nbsp; 6380302574</h1>
        </div>
        
    </div>
  )
}
