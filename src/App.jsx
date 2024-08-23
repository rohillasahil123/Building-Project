import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registration from './components/Registration'
import ForgetPassword from './components/ForgetPassword'
import Recovery from './components/Recovery'
import { Toaster } from 'react-hot-toast';
import Main from './components/Main'
import Contect from './components/Contect'
import About from './components/About'
import Logout from './components/Logout'



  const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Main/>}></Route>
        <Route path='/register' element={<Registration />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path='/recovery' element={<Recovery />}></Route>
        <Route path='/contact' element={<Contect />}></Route>
        <Route path='/about' element={<About/>}></Route>
    <Route path='/' element={<Logout/>}></Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
