import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Home = () => {

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen px-10 py-40 bg-third absolute top-[5rem] font-montserrat flex flex-col justify-start items-center'>
        <div className='mx-auto font-montserrat font-[700] text-[5rem] text-fourth text-center'>
          WELCOME TO DATA ENCRYPTION STANDARD CONVERTER
        </div>
        <div className='mx-auto w-[50%] flex flex-row justify-center items-center gap-x-5'>
          <button className='w-[10rem] h-[3rem] bg-main rounded-lg font-montserrat text-lg font-[600] hover:scale-90 transition-all duration-150'>
            <Link to={'/encrypt'}>Encrypt</Link>
          </button>
          <button className='w-[10rem] h-[3rem] bg-main rounded-lg font-montserrat text-lg font-[600] hover:scale-90 transition-all duration-150'>
            <Link to={'/decrypt'}>Decrypt</Link>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home