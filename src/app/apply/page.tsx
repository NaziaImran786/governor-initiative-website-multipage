import Link from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa';

export default function Apply() {
  return (
    <div className='w-[100%] h-[100%] bg-[#ffffff] flex flex-col justify-center items-center m-auto py-10'>
      <div className='w-auto lg:w-[700px] lg:h-[476px] bg-[#ffffff] shadow-2xl lg:m-20 item-center'>
         <h2 className='text-center text-[20px] lg:text-[32px] font-semibold text-[#044e83] px-4 lg:px-20 py-10 '>
          Before continuing to the application please subscribe on these social media platforms.</h2>
          <div className='h-[40px] w-[40px] m-auto py-[-40px]'> 
            <Link href={"/"}><FaFacebook color='#4267b2'size={40} /></Link>
          </div>
          <div className='h-[fit-content] w-[200px] m-auto py-10'>
            <button className='bg-[#6895b5] text-[#ffffff] w-[180px] h-[50px] font-semibold'>CONTINUE</button>
          </div>
          <div className='h-[fit-content] w-[240px] m-auto mt-[-30px]'>
            <p className='text-black py-4'>Already Applied? <Link href="/results" className='text-[#62a6fa] '>Get Admit Card</Link></p>
          </div>
      </div>

      <div className=' px-4 grid grid-cols-2 lg:flex justify-between gap-2 '>
        <div className='w-[166px] hover:[42px] gap-2 text-[#044e83] flex justify-center items-center'>
          <div className='h-[32px] w-[32px] border-[#044e83] border-[2px] rounded-full flex justify-center items-center'>1</div>
          <h1>Facebook</h1>
        </div>

        <div className='w-[166px] hover:[42px] gap-2 text-[#044e83] flex justify-center items-center'>
          <div className='h-[32px] w-[32px] border-[#e2e8f0] border-[2px] rounded-full flex justify-evenly items-center'>2</div>
          <h1>Youtube</h1>
        </div>

        <div className='w-[166px] hover:[42px] gap-2 text-[#044e83] flex justify-center items-center'>
          <div className='h-[32px] w-[32px] border-[#e2e8f0] border-[2px] rounded-full flex justify-evenly items-center'>3</div>
          <h1>Twitter</h1>
        </div>

        <div className='w-[166px] hover:[42px] gap-2 text-[#044e83] flex justify-center items-center'>
          <div className='h-[32px] w-[32px] border-[#e2e8f0] border-[2px] rounded-full flex justify-evenly items-center'>4</div>
          <h1>Instagram</h1>
        </div>

        <div className='w-[166px] hover:[42px] gap-2 text-[#044e83] flex justify-center items-center'>
          <div className='h-[32px] w-[32px] border-[#e2e8f0] border-[2px] rounded-full flex justify-evenly items-center'>5</div>
          <h1>Apply</h1>
        </div>
      </div>
      
    </div>
  )
}
