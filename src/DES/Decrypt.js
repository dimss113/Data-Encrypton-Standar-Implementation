import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { toast } from 'react-toastify'

import { DecryptMessage } from '../DEA/DecryptMessage'

const Decrypt = () => {
  const [text, setText] = useState('')
  const [key, setKey] = useState('')
  const [decryptedMessage, setDecryptedMessage] = useState("")
  const [showData, setShowData] = useState(false)
  const [selected, setSelected] = useState(1)
  const [hexClass, setHexClass] = useState();
  const [textClass, setTextClass] = useState();
  const [title, setTitle] = useState('')

  useEffect(() => {
    if(selected === 1) {
      setHexClass('w-[8rem] h-[3rem] bg-main rounded-lg flex justify-center px-2 items-center');
      setTextClass('w-[8rem] h-[3rem] bg-fourth rounded-lg flex justify-center items-center');
      setTitle('Decrypt Hex')
    }
    else {
      setHexClass('w-[8rem] h-[3rem] bg-fourth rounded-lg flex justify-center px-2 items-center');
      setTextClass('w-[8rem] h-[3rem] bg-main rounded-lg flex justify-center items-center');
      setTitle('Decrypt Text')
    }
  }, [selected])

  useEffect(() => {
    console.log(text)
    console.log(key)
  }, [text, key]);
  
  const handleCheck = (e) => {
    if (key.length !== 8) {
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

  const handleSelected = (e) => {
    if (e === 'hex') {
      setSelected(1);
      setTitle('Decrypt Hex')
    } else {
      setSelected(2);
      setTitle('Decrypt Text')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)

    if (!handleCheck()) {
      return;
    }
 
    setDecryptedMessage(DecryptMessage(text, key, selected));
    setShowData(true);
  };

  const handleReset = () => {
    setText('');
    setKey('');
    setDecryptedMessage([]);
    setShowData(false);
  }

  useEffect(() => {
    console.log(decryptedMessage);
  }
  , [decryptedMessage])

  return (
    <>
      <Navbar />
      <div className='w-full min-h-screen bg-third absolute top-[5rem] font-montserrat'>
        <div className='w-[80%] mx-auto flex-col items-start py-5'>
          <h1 className='font-bold font-montserrat text-[3rem] text-gray-500 py-5'>
            Data Encryption Standard
          </h1>
          <div className='w-[30%]  flex flex-row justify-start gap-x-10 items-center mb-10'>
            <div className={`${hexClass} cursor-pointer`} onClick={() => handleSelected('hex')} >
              <p className='text-gray-900 font-montserrat font-bold text-lg text-center '>
                Hex
              </p>
            </div>
            <div className={`${textClass} cursor-pointer`} onClick={() => handleSelected('text')}>
              <p className='text-gray-900 font-montserrat font-bold text-lg text-center'>
                Text
              </p>
            </div>
          </div>
          <form className='w-full bg-fourth rounded-lg py-20' onSubmit={handleSubmit}>
            <div className='w-[90%] mx-auto'>
            <h1 className='font-[700] font-montserrat text-[2rem] text-gray-500'>{title}</h1>
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
                  Decode
                </button>
              </div>
            </div>
          </form>

          {
            showData && (
              <>
                <h1 className='font-bold font-montserrat text-[3rem] text-gray-500 pt-5'>
                  Decryption Result
                </h1>
                <div className='w-full mb-20 mx-auto bg-fourth  rounded-lg'>
                  <div className='w-full bg-fourth rounded-lg py-20' onSubmit={handleSubmit}>
                    <div className='w-[90%] mx-auto'>
                      <div className='flex flex-col justify-center items-start p-10'>
                        <label className='text-gray-500 font-montserrat font-bold text-lg'>
                          Decoded {title} 
                        </label>
                        <p className='w-full h-[3rem] my-4 rounded-lg bg-third text-gray-500 font-montserrat font-bold text-lg px-4 flex justify- items-center'>
                          {decryptedMessage.slice(0, 8)}
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

export default Decrypt;