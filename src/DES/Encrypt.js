import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { toast } from 'react-toastify'

import { EncryptMessage } from '../DEA/EncryptMessage'

const Encrypt = () => {
  const [text, setText] = useState('')
  const [key, setKey] = useState('')
  const [encryptedMessage, setEncryptedMessage] = useState([])
  const [showData, setShowData] = useState(false)

  useEffect(() => {
    console.log(text)
    console.log(key)
  }, [text, key]);
  
  const handleCheck = (e) => {
    if (text.length !== 8 || key.length !== 8) {
      toast.error('Text and key must be 8 characters long', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: 'light'
      });
      return false;
    }

    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)

    if (!handleCheck()) {
      return;
    }
 
    setEncryptedMessage(EncryptMessage(text, key));
    setShowData(true);
  };

  const handleReset = () => {
    setText('');
    setKey('');
    setEncryptedMessage([]);
    setShowData(false);
  }

  useEffect(() => {
    console.log(encryptedMessage);
  }
  , [encryptedMessage])

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen bg-third absolute top-[5rem] font-montserrat'>
        <div className='w-[80%] mx-auto flex-col items-start py-5'>
          <h1 className='font-bold font-montserrat text-[3rem] text-gray-500 py-5'>
            Data Encryption Standard
          </h1>
          <form className='w-full bg-fourth rounded-lg py-20' onSubmit={handleSubmit}>
            <div className='w-[90%] mx-auto'>
              <div className='flex flex-col justify-center items-start p-10'>
                <label className='text-gray-500 font-montserrat font-bold text-lg'>
                  Input 8 characters
                </label>
                <input type='text' name='text' value={text} onChange={(e) => setText(e.target.value)} className='w-full h-[3rem] my-4 rounded-lg bg-third text-gray-500 font-montserrat font-bold text-lg px-4' placeholder='Enter your text here' />
                <label className='text-gray-500 font-montserrat font-bold text-lg'>
                  Key
                </label>
                <input type='text' name='key' value={key} onChange={(e) => setKey(e.target.value)} className='w-full h-[3rem] my-4 rounded-lg bg-third text-gray-500 font-montserrat font-bold text-lg px-4' placeholder='Enter your text here' />
                <button  className='w-[8rem] h-[3rem] bg-gray-500 rounded-lg font-montserrat text-lg font-[600] hover:scale-90 transition-all duration-150'>
                  encode
                </button>
              </div>
            </div>
          </form>

          {
            showData && (
              <>
                <h1 className='font-bold font-montserrat text-[3rem] text-gray-500 pt-5'>
                  Encryption Result
                </h1>
                <div className='w-full mb-20 mx-auto bg-fourth  rounded-lg'>
                  <div className='w-full bg-fourth rounded-lg py-20' onSubmit={handleSubmit}>
                    <div className='w-[90%] mx-auto'>
                      <div className='flex flex-col justify-center items-start p-10'>
                        <label className='text-gray-500 font-montserrat font-bold text-lg'>
                          Hex
                        </label>
                        <p className='w-full h-[3rem] my-4 rounded-lg bg-third text-gray-500 font-montserrat font-bold text-lg px-4 flex justify-start items-center'>
                          {encryptedMessage[1]}
                        </p>
                        <label className='text-gray-500 font-montserrat font-bold text-lg'>
                          Text
                        </label>
                        <p className='w-full h-[3rem] my-4 rounded-lg bg-third text-gray-500 font-montserrat font-bold text-lg px-4 flex justify-start items-center'>
                          {encryptedMessage[0]}
                        </p>
                        <button onClick={handleReset} className='w-[8rem] h-[3rem] bg-gray-500 rounded-lg font-montserrat text-lg font-[600] hover:scale-90 transition-all duration-150'>
                          reset
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Encrypt;