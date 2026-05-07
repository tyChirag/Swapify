import React from 'react'
import Login from './pages/login/Login'
import { Route ,Routes} from 'react-router-dom'
import Main from './pages/Main/Main'

const App = () => {
  return (
    <div>
{/* <Routes>
  <Route path='/' element={<Login/>}/>
</Routes> */}
<Main/>
{/* <Login/> */}
    </div>
  )
}

export default App
