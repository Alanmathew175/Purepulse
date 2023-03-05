import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../../pages/auth/LoginPage';
// import UserHome from '../../pages/userPages/UserHome';
 import About from '../../pages/userPages/About';
import Preloader from '../../pages/userPages/Preloader';
const UserRoutes = () => {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Preloader/>}/>
      <Route path='/about' element={<About/>}/>
     <Route path='/user/login' element={<LoginPage access="user"/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default UserRoutes
