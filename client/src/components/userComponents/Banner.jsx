import React from 'react'
import { Box } from '@mui/system'
import MainBanner from "../../assets/MainBanner.jpg"
const Banner = () => {
  return (
    <>
        <Box component="img"
        src={MainBanner}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth: '100%',
            marginTop:{xs:1,sm:1.5,md:2,lg:3}
          }}
      />
      
    </>
  )
}

export default Banner
