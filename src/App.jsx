import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'remixicon/fonts/remixicon.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Order from './Components/Order'
import Menu from './Components/Menu'
import Restuarent_List from './Components/Restuarent_List'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/restuarent_list' element={<Restuarent_List/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
