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
      <Box align="center"><h1>My Website</h1></Box>
      <Box>
      </Box>
      <Flex as="nav">
        <NavLink a href="https://www.linkedin.com/in/kaden-chien/" p={4}>
          LinkedIn
        </NavLink>
        <NavLink href="https://github.com/kadenchien" p={4}>
          Github
        </NavLink>
      </Flex>
      </Grid>
  </div>
  )
}
export default Navbar;