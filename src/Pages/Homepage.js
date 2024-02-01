import React from "react";
import styles from '../Styles/pages/Home.css';
import {scroller} from 'react-scroll';

import{
    Box,
    Button,
    Heading,
    NavLink,
    Link,
    Grid
  } from 'theme-ui';

function Home(){
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
    return(
     <>
     <div className = "home">
     <div className = "intro--section">
        <Box sx={{alignItems: 'center', textAlign: 'center', justifyContent: 'middle', flexDirection: 'column', flexDirection: 'column', height: '100vh', display: 'flex', pt: '18%'}}>
        <div className = "intro--heading">
        <script defer src="script.js"></script>
          <Heading as="h1" variant="h1" color="black" sx={{fontSize: '70px'}}>
            Hey, I'm Kaden
          </Heading>
        </div>
        <div className = "intro--content">
          <p>
            A freshman at Duke studying CS and Math who is passionate about <br />web development and data science
          </p>
        </div>
        <NavLink onClick = {() => scrollToSection('projects')}><button className="button-intro">Projects</button></NavLink>
        </Box>
     </div>
     </div>
     </>
    )
}

export default Home;