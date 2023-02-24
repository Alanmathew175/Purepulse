import React from 'react'
import LoginPage from '../../pages/auth/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const DoctorRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/doctor/login' element={<LoginPage access="Doctor"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default DoctorRoutes
