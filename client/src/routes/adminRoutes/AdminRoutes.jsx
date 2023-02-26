import React from 'react'
import LoginPage from '../../pages/auth/LoginPage'
import AdminDashboard from '../../pages/adminPages/AdminDashboard';
import AdminBlogs from '../../pages/adminPages/AdminBlogs';
import AdminBookings from '../../pages/adminPages/AdminBookings';
import AdminDocotors from '../../pages/adminPages/AdminDocotors';
import AdminServices from '../../pages/adminPages/AdminServices';
import AdminUsers from '../../pages/adminPages/AdminUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminProtected from '../../pages/auth/AdminProtected';
const AdminRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/admin' element={<LoginPage access="Admin"/>} />
      <Route element={<AdminProtected/>}>
      <Route path='/admin/admin-dashboard' element={<AdminDashboard/>} />
      <Route path='/admin/admin-blogs' element={<AdminBlogs/>} />
      <Route path='/admin/admin-bookings' element={<AdminBookings/>} />
      <Route path='/admin/admin-doctors' element={<AdminDocotors/>} />
      <Route path='/admin/admin-services' element={<AdminServices/>} />
      <Route path='/admin/admin-users' element={<AdminUsers/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AdminRoutes
