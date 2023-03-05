import React from 'react'
import { Stack,Box,Typography,useMediaQuery,Avatar } from'@mui/material'
import Banner from "../../assets/SecondBanner.jpg"
import AvatarImage from "../../assets/AvatarImage.jpg"
import {Link} from 'react-router-dom'

const SecondBanner = () => {
  const isAboveLgScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
  
  return (
    <>
    {isAboveLgScreen?
    <Stack direction='row' bgcolor='secondary.main' xs={12} sm={6}  sx={{  position:'relative', marginTop:{xs:1,sm:1.5,md:2.3,lg:3.5}}}>
    <Box component="img"
        src={Banner}
        alt="banner-main"
        sx={{
            height:"auto",
            maxWidth:{xs:400,sm:350,md:600,lg:700},
           
           
          }}
      />
      <Stack bgcolor='primary.main'sx={{position:'absolute',top:{xs:50,sm:170},
      borderTopRightRadius:30,borderBottomRightRadius:30}}padding={1} >
          <Typography variant='h6'fontWeight={700}  color='secondary'>Are you a doctor,</Typography>
          <Typography variant='h6' fontWeight={700}  color='secondary'>Want to join with us?</Typography>
          <Link  to='/doctor'  >Learn more</Link>
          
      </Stack>
           <Stack> 
          
           <Typography variant='h6' fontWeight={700} sx={{marginLeft:35,marginTop:8}} color='warning.main'>Our vision</Typography>
           <Avatar src={AvatarImage} sx={{ width:70, height: 70,marginLeft:37,marginY:3}}/>
          
           
           <Typography variant='subtitle1' fontWeight={700} marginX={3} color='warning.main'>
            Our mission is to provide in time support and improve medical sustainability.
             We are working towards affordability and availability. Every patient in need must 
             receive quality health care at the best price..</Typography>
           </Stack>
    </Stack>:<Stack sx={{display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'secondary.main',marginY:3}}>
          <Typography variant='h6'fontWeight={700}  color='warning.main'>Are you a doctor,</Typography>
          <Typography variant='h6'fontWeight={700}  color='warning.main'>Want to join with us?</Typography>
         
          <Link  to='/doctor' >Learn more</Link>
      </Stack>}
   
    </>
  )
}

export default SecondBanner
