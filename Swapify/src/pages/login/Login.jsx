import React from 'react'
import Heading from './login_components/Heading'
import Form from './login_components/Form'
import Button from './login_components/Button'
import Logos from './login_components/Logos'

const Login = () => {
  return (
    <div className='h-screen w-screen bg-amber-600 flex flex-wrap justify-center items-center bg-[url(https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHx3ZWJzaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)] bg-cover bg-no-repeat'>
      <div className='w-9/20 flex flex-col items-center border-2 rounded-3xl px-5 py-5 bg-gradient-to-br from-white to-gray-400'>
      <Heading/>
      <Form/>
      <Logos/>
      </div>
    </div>
  )
}

export default Login
