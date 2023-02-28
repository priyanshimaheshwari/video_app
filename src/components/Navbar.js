import { AccountCircleOutlined, SearchOutlined } from '@material-ui/icons'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' sticky top-0 bg-${({theme})=>theme.bgLighter} text-${({theme})=>theme.text}  h-[56px]'>
      <div className='flex items-center justify-between pt-[20px] pb-[20px] gap-[5px]  '>
        <div className='ml-[300px] items-center justify-around border-solid border-2 border-black w-40% bgc-transparent rounded-xl'><input placeholder='Search' className='rounded w-[400px] border-none'/>
        <SearchOutlined /></div>
        <div className='pr-[20px]'><button className='border-blue-900 text-blue-900 bg-transparent border-solid border-2  '><AccountCircleOutlined />SIGN IN</button></div>
      </div>
    </div>
  )
}

export default Navbar