import React, { useState } from 'react'

const Button = (props) => {
  const User="chirag.t25126@nst.rishihood.edu.in"
  const pass="1234"
function btnClicked(){
  console.log(props)
 if (props.user==User && props.pass==pass){
  alert("Loginned Successfully")
 }
 else{
  alert("Wrong Credential Try Again")
 }
}
  return (
    <>
    <div className='h-1/2 w-1/3 text-center border-2 px-10 py-2 rounded-2xl bg-olive-500 text-white active:scale-80'>
      <button onClick={btnClicked}>Login</button>
    </div>
          <h4 className='text-gray-900'>Or sign in with</h4>

    </>
  )
}

export default Button
