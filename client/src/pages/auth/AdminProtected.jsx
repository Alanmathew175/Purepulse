import React from 'react'
import { Navigate,Outlet } from 'react-router'


const checkToken=()=>{
        const Token=localStorage.getItem('Admintoken')
        return Token
}
const AdminProtected = () => {
   
    const isAuth=checkToken()
  return isAuth?<Outlet/>:<Navigate to='/admin'/>
}

export default AdminProtected