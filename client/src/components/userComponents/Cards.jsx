import React,{useState} from 'react'
import { Stack } from '@mui/system'
import { Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import  { Card, CardMedia, CardActions, CardContent } from '@mui/material'
import Button from '@mui/material/Button'
import Card1 from "../../assets/Card1.jpg"
import Card2 from "../../assets/Card2.jpg"
import Card3 from "../../assets/Card3.jpg"
import Card4 from "../../assets/Card4.jpg"
const Cards = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
    const cardNames=[ {name:'Free Booking',image:Card1},{name:'Guaranteed availability',image:Card2},
    {name:'1000+ Verified doctors',image:Card3},{name:'24x7 Services',image:Card4}]
    
  return (
    <>
        <Stack direction='row' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Typography variant='h5' color='primary' fontWeight={{xs:600}} mt={{xs:1,sm:1.3,md:1.6,lg:2}}>Why Choose PurePulse</Typography>
        </Stack>
        <Grid container sx={{display:'flex',justifyContent:'center'}}  >
          {cardNames.map((value,index)=>{
           return <Grid  xs={12} sm={6} lg={3} item key={index} sx={{borderRadius:5}}>

          <Card
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          sx={{ position: 'relative', margin: '10px', borderRadius:3,bgcolor:'warning.main' }}
        >
           
           <CardMedia
            image={value.image}
            sx={{
              height:{xs:200,sm:250},
              opacity: hoveredIndex === index ? 0.5 : 1,
            }}
          />
          
          
      {hoveredIndex === index && (
            <CardActions style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Button variant="contained" color="primary">
                Book Now
              </Button>
            </CardActions>
          )}
            < CardContent>
          <Typography color="primary" variant='h6' fontWeight={{xs:550}} >{value.name}</Typography>
          </CardContent>
           </Card>
            </Grid>
        
    } )} 
           
        </Grid>
    </>
  )
}

export default Cards
