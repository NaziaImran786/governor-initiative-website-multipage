import Link from 'next/link'
import React from 'react'
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaTwitter, FaYoutube } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';

function Footer() {
  return (
    <div className='justify-between bg-[#f4f4f5] h-auto w-[100%]  py-5 px-14  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-8'>
      <div className='text-[16px] text-black'>
        <h1 className='text-[24px] font-semibold text-black'>Core Courses</h1>
        <ul className='py-4'>
          <li className='py-2'><Link href={"/"}>Programming Fundamentals</Link></li>
          <li className='py-2'><Link href={"/"}>Web2 Using NextJS</Link></li>
          <li className='py-2'><Link href={"/"}>Earn as You Learn</Link></li>
        </ul>
      </div>

      <div className='text-[16px] text-black'>
        <h1 className='text-[24px] font-semibold text-black'>Advanced Courses</h1>
        <ul className='py-4'>
          <li className='py-2'><Link href={"/"}>Web 3 Metaverse</Link></li>
          <li className='py-2'><Link href={"/"}>Cloud-Native Computing</Link></li>
          <li className='py-2'><Link href={"/"}>Artificaial Intelligence (AI) and Deep Learning</Link></li>
          <li className='py-2'><Link href={"/"}>Ambient Computing and IoT</Link></li>
          <li className='py-2'><Link href={"/"}>Genomics and Bioinformatics</Link></li>
          <li className='py-2'><Link href={"/"}>Network Programmability and Automation</Link></li>
        </ul>
      </div>

      <div className='text-[16px] text-black'>
        <h1 className='text-[24px] font-semibold text-black'>Social Links</h1>
        <div className='py-4 flex gap-3'>
          <Link href={"/"}><FaFacebook color='#044e82'size={30} /></Link>
          <Link href={"/"}><FaYoutube color='red' size={30} /></Link>
          <Link href={"/"}><FaTwitter color='#1da1f2' size={30} /></Link>
          <Link href={"/"}><FaInstagramSquare color='#e5387e' size={30}/></Link>
          <Link href={"/"}><AiFillTikTok color='black' size={30}/></Link>
        </div>
        <div className='py-4 flex gap-3'>
        <MdOutlineEmail color='#044e82' size={30} /><a href="mailto:education@governorsindh.com" className='text-[#044e82] text-[16px]'>education@governorsindh.com</a>
        </div>
        <p className='text-[16px]'>© 2024. All Rights Reserved by Nazia Imran.</p>
      </div>
    </div>
  )
}

export default Footer
