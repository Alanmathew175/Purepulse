import React from 'react'
import LoginPage from '../../pages/auth/LoginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const AdminRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/admin/login' element={<LoginPage access="Admin"/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AdminRoutes
