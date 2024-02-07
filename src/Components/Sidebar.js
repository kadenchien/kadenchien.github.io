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
    Link,
    Button
} from 'theme-ui';
function Sidebar(){
return (
    <div className = "sidebar--box">
        <Box sx={{position: 'absolute', top: '38%', left: 0, bottom: 0, width: '60px', height: '250px', bg: 'white', color: 'text', overflowY: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.3)'}}>
            <Flex sx = {{flexDirection: 'column', alignItems: 'center', padding: '5px', pt: '13px'}}>
            <Link href='https://github.com/kadenchien' target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block'}}>
                <Image src = './img/github.png' alt = "ImageButton" sx={{ borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease', '&:hover': {backgroundColor: 'rgb(242, 225, 250)'},  }} />
            </Link>
            <Box sx={{pt: '5px'}}>
            <Link href='https://www.linkedin.com/in/kaden-chien' target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block'}}>
                <Image src = './img/linkedIn.png' alt = "ImageButton" sx={{ borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease', '&:hover': {backgroundColor: 'rgb(242, 225, 250)'},  }} />
            </Link>
            </Box>
            <Box sx={{ borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease', '&:hover': {backgroundColor: 'rgb(242, 225, 250)'}, width: '50px', height: '50px', pl: '5px', pt: '5px'}}>
            <Link href='https://www.instagram.com/kadenchien' target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block'}}>
                <Image src = './img/instagram.png' alt = "ImageButton" sx={{width: '40px', height: 'auto'}}/>
            </Link>
            </Box>
            <Box sx={{pt: '5px'}}>
            <Link href='https://open.spotify.com/user/luvr4vrb9gf6gyhnrzf7ij7kt?si=f16dd29195614862' target="_blank" rel="noopener noreferrer" sx={{ display: 'inline-block'}}>
                <Image src = './img/spotify.png' alt = "ImageButton" sx={{ borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease', '&:hover': {backgroundColor: 'rgb(242, 225, 250)'}, }} />
            </Link>
            </Box>
            </Flex>
        </Box>
    </div>
    
)
}
export default Sidebar;