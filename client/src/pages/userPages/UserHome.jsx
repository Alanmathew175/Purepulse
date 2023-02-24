import React from 'react'
import Header from '../../layoutes/Header'
import Footer from '../../layoutes/Footer'
import Banner from '../../components/userComponents/Banner'
import Cards from '../../components/userComponents/Cards'
import SecondBanner from '../../components/userComponents/SecondBanner'
import Testimonials from '../../components/userComponents/Testimonials'
const UserHome = () => {
  return (
    <>
    <Header/>
        <Banner/>
        <Cards/>
        <SecondBanner/>
        <Testimonials/>
    <Footer/>
      
    </>
  )
}

export default UserHome
