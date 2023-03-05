import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoctorsInstruction from '../../pages/doctorPages/DoctorsInstruction';
import RegisterationForm from '../../pages/doctorPages/RegisterationForm';
const DoctorRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/doctor' element={<DoctorsInstruction/>} />
      <Route path='/doctor-form' element={<RegisterationForm/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default DoctorRoutes
