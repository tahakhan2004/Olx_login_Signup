import React from 'react'
import LogIn from './view/login/Login'
import SignUp from './view/signup/SignUp'
import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import ProductDetail from './view/productDetails'
import SellItems from './view/SellScreen'


const App = () => {
  return (
    <div >

      <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<LogIn/>} />
                <Route path='/register' element={<SignUp/>} />
                <Route path='/product/:id' element={<ProductDetail/>} />
                <Route path='/sellscreen' element={<SellItems/>} />
                
        </Routes>

    </div>
  )
}

export default App
