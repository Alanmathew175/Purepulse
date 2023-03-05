import React,{lazy,Suspense} from 'react'
import Header from '../../layoutes/Header'
import Footer from '../../layoutes/Footer'

import Cards from '../../components/userComponents/Cards'
import SecondBanner from '../../components/userComponents/SecondBanner'
import Testimonials from '../../components/userComponents/Testimonials'
const Banner = lazy(()=> import('../../components/userComponents/Banner'))

const UserHome = () => {
  return (
    <>
    <Header/>
    <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
        <Cards/>
        <SecondBanner/>
        <Testimonials/>
    <Footer/>
      
    </>
  )
}

export default UserHome
