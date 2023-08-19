import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '197px', xs: '70px' }, ml: { sm: '50px' }}} position="relative" p="20px">
    
    <Typography color="#FF2625" fontWeight="bolder" fontSize="35px" className='explore-exercises-button'>
     
       Active Fitness
    
    </Typography>
    
    
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
     
      Sweat, Smile <br />
      And Repeat
    
    </Typography>
    
    <Typography fontSize="22px" fontFamily="Open Sans" lineHeight="35px">
 
  Check out the most effective exercises personalized to you

</Typography>

    <Stack>
      
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'rgb(0,130,255)', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}  > 
      
      Explore Exercises 
      
      </a>
    
    </Stack>
   
   
    <Typography className="exercise-heading" fontWeight="bold" color="rgb(0, 130, 255)" 
  sx={{ opacity: '0.3', 
       display: { lg: 'block', xs: 'block' }, 
       fontSize: { lg: '200px', xs: '120px' } }} >
  
  <span opacity="5" >Ex</span>ercise

</Typography>

    
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img gradient-image" style={{ position: 'absolute', top: '100px', right:"150px", opacity: '1' }} />
 
  </Box>

);

export default HeroBanner;
