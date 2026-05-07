import React from 'react'
import Login from './pages/login/Login'
import { Route ,Routes} from 'react-router-dom'
import Main from './pages/Main/Main'
import Profile from './pages/Main/Profile'
import Categeries from './pages/Main/Categeries'
import Trade from './pages/Main/Trade'

const App = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/home' element={<Main/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path="/categories" element={<Categeries/>}/>
  <Route path='/trade' element={<Trade/>}/>

</Routes>

    </div>
  )
}

export default App
