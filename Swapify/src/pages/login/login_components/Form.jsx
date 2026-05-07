import React, { use, useState } from 'react'
import Button from './Button'

const Form = () => {
  const[User,setUser]=useState("")
  const[Pass,setPass]=useState("")
  const getUser=(a)=>{
setUser(a)
  }
  const getPass=(b)=>{
    setPass(b)
  }
  return (
    <>
    <div className='flex flex-col gap-5 w-full max-w-md'>
      
      <input
        className="border-2 border-gray-300 rounded-2xl px-5 py-3 outline-none focus:border-black transition-all shadow-sm"
        type="email"
        placeholder='📧 Enter your email'
        onChange={(e)=>{getUser(e.target.value)}}
      />

      <input
        className='border-2 border-gray-300 rounded-2xl px-5 py-3 outline-none focus:border-black transition-all shadow-sm'
        type="password"
        placeholder='🔒 Enter your password'
        onChange={(e)=>{setPass(e.target.value)}}
      />

      <a
        href=""
        className='text-sm text-right text-gray-600 hover:text-black hover:underline transition-all'
      >
        Forgot Password?
      </a>

    </div>
    <Button user={User} pass={Pass} />
    </>
  )
}

export default Form