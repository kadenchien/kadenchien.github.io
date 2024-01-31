import React, {useState, useEffect} from 'react';
import styles from '../Styles/pages/Home.css'
import { ThemeUIProvider } from "theme-ui"

import {
    Box,
    Grid,
    IconButton,
    Image,
    NavLink,
    Flex,
    Button
} from 'theme-ui';
function Navbar(){
return (
  <div className="navbarTop">
      <Grid gap={2} columns={[4, '1fr 2fr 1fr']}>
      <Flex sx={{flexDirection: 'row', alignItems: 'center', pl: '80px'}}>
      <Image src = './img/photo.jpeg' sx={{ width: '50px', height: 'fit-content'}} />
      <Box align="center" sx={{pt: '3px', pl: '20px'}}>
        <h2>Kaden Chien</h2>
      </Box>
      </Flex>
      <Box>
      </Box>
      <Flex as="nav">
        <NavLink a href="https://www.linkedin.com/in/kaden-chien/" sx={{pt:'30px', pl: '70px'}}>
          LinkedIn
        </NavLink>
        <div className = 'gitLink'>
        <NavLink href="https://github.com/kadenchien" sx={{pt:'30px', pl: '50px'}}>
          Github
        </NavLink>
        </div>
      </Flex>
      </Grid>
  </div>
  )
}
export default Navbar;