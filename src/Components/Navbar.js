import React from 'react';
import {scroller} from 'react-scroll';

import {
    Box,
    Grid,
    Image,
    Flex,
    NavLink,
} from 'theme-ui';

function Navbar(){

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

return (
  <div className="navbarTop">
      <Grid gap={2} columns={[3, '1fr 0.75fr 1fr']}>
      <Flex sx={{flexDirection: 'row', alignItems: 'center', pl: '80px'}}>
      <Image src = './img/photo.jpeg' sx={{ width: '50px', height: 'fit-content'}} />
      <Box align="center" sx={{pl: '20px'}}>
        <h2>Kaden Chien</h2>
      </Box>
      </Flex>
      <Box>
      </Box>
      <Flex as="nav" sx={{alignItems: 'center'}}>
        <NavLink onClick = {() => scrollToSection('home')} sx={{':hover': { cursor: 'pointer' }}}>Home</NavLink>
        <NavLink onClick = {() => scrollToSection('about')} sx={{pl: '30px', ':hover': { cursor: 'pointer' }}}>About</NavLink>
        <NavLink onClick = {() => scrollToSection('projects')} sx={{pl: '30px', ':hover': { cursor: 'pointer' }}}>Projects</NavLink>
        <NavLink onClick = {() => scrollToSection('education')} sx={{pl: '30px', ':hover': { cursor: 'pointer' }}}>Education</NavLink>
        <NavLink onClick = {() => scrollToSection('experience')} sx={{pl: '30px', ':hover': { cursor: 'pointer' }}}>Experience</NavLink>
      </Flex>
      </Grid>
  </div>
  )
}
export default Navbar;