import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import LoginPage from './Components/LoginPage'
import RegisterPage from './Components/RegisterPage'
import Demo from './Components/Demo'

const App = () => {
  return (
   <Routes>
    <Route path='/demo' element={<Demo/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>} />
   </Routes>
  )
}

export default App