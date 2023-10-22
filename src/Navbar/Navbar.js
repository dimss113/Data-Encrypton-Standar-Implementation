import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState("")
  const [homeClass, setHomeClass] = useState("");
  const [encryptClass, setEncryptClass] = useState("");
  const [decryptClass, setDecryptClass] = useState("");
  
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    console.log(currentPath);
  }, [currentPath])

  useEffect(() => {
    if (currentPath === "/") {
      setHomeClass("font-[500] text-lg text-fourth opacity-50 transition duration-500 ease-in-out scale-75");
      setEncryptClass("font-[500] text-lg text-fourth");
      setDecryptClass("font-[500] text-lg text-fourth");
    } else if (currentPath === "/encrypt") {
      setHomeClass("font-[500] text-lg text-fourth");
      setEncryptClass("font-[500] text-lg text-fourth opacity-50 transition duration-500 ease-in-out scale-75");
      setDecryptClass("font-[500] text-lg text-fourth");
    } else if (currentPath === "/decrypt") {
      setHomeClass("font-[500] text-lg text-fourth");
      setEncryptClass("font-[500] text-lg text-fourth");
      setDecryptClass("font-[500] text-lg text-fourth opacity-50 transition duration-500 ease-in-out scale-75");
    }
  }
  , [currentPath])

  return (
    <>
      <nav className=' bg-main w-[100%] h-[5rem] fixed z-10'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-full px-8 py-2  flex justify-between items-center'>
            <h1 className='text-3xl font-bold text-fourth'>
              <Link to={'/'}>DES</Link>
            </h1>
            <div className='flex flex-row gap-x-10'>
              <span className={`${homeClass} hover:opacity-50`}>
                <Link to={'/'}>Home</Link>
              </span>
              <span className={`${encryptClass} hover:opacity-50`}>
                <Link to={'/encrypt'}>Encrypt</Link>
              </span>
              <span className={`${decryptClass} hover:opacity-50`}>
                <Link to={'/decrypt'}>Decrypt</Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar