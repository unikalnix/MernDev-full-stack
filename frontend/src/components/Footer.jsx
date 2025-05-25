import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black border-t-1 border-[#2C2C2D] py-15 flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between sm:px-10'>
         <h1 className="text-[#CACACA] font-semibold text-[24px] relative w-fit cursor-pointer">
          Portfolio
          <span className="absolute top-0 right-0 w-[5px] h-[5px] rounded-full bg-[#f67655]"></span>
        </h1>
        <p className='text-[#a1a1aa] text-base'>&copy; {new Date().getFullYear()} All rights reserved</p>
        <p onClick={() => {
          window.scrollTo({
            behavior:'smooth',
            top: 0
          })
        }} className='text-[#a1a1aa] text-sm cursor-pointer hover:text-[#f67655] transition-all duration-200'>back to top</p>
    </footer>
  )
}

export default Footer
