import React from 'react'

function Results() {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center bg-[#ffffff] py-20 lg:py-14'>
      <h1 className='text-[18px] lg:text-3xl font-extrabold text-[#044e83] py-10 lg:py-24'>Grand Entrance Exam Result</h1>
      <div className='h-auto w-auto lg:w-[700px] flex flex-col shadow-2xl px-8 py-10 '>
        <div className='flex flex-col py-2 gap-2'>
        <label htmlFor="Registration Number" className='text-[#334155] text-[20px]'>Registration Number *</label>
        <input type="number" className='border-2 border-gray-300 rounded-md p-2 bg-[#f3f4f6]' placeholder='Registration Number' />
        </div>

        <div className='flex flex-col py-2 gap-2'>
        <label htmlFor="CNIC or B-Form Number" className='text-[#334155] text-[20px]'>CNIC or B-Form Number *</label>
        <input type="number" className='border-2 border-gray-300 rounded-md p-2 bg-[#f3f4f6]' placeholder='CNIC or B-Form Number' />
        </div>
        <div className='w-auto flex justify-center items-center py-4'>
        <button className='bg-[#044e83] text-white w-full lg:w-[180px] h-[60px] font-semibold'>GET RESULT</button>
        </div>
      </div>
      
    </div>
  )
}

export default Results
