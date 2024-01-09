import React, {useState, useEffect} from 'react';
import styles from '../Styles/pages/Home.css'
import { ThemeUIProvider } from "theme-ui"

import {
    Box,
    Grid,
    IconButton,
    NavLink,
    Flex,
    Button
} from 'theme-ui';
function Navbar(){
return (
  <div className="navbarTop">
      <Grid gap={2} columns={[3, '1fr 2fr 1fr']}>
      <Box align="center"><h1>Porfolio</h1></Box>
      <Box>
      </Box>
      <Flex as="nav">
        <NavLink a href="https://www.linkedin.com/in/kaden-chien/" sx={{pt:'35px', pl: '70px'}}>
          LinkedIn
        </NavLink>
        <div className = 'gitLink'>
        <NavLink href="https://github.com/kadenchien" sx={{pt:'35px', pl: '50px'}}>
          Github
        </NavLink>
        </div>
      </Flex>
      </Grid>
  </div>
  )
}
export default Navbar;