import React from "react";
import styles from '../Styles/pages/Home.css';

import{
    Box,
    Button,
    Heading,
    Link,
    Grid
  } from 'theme-ui';

function Home(){
    return(
     <>
     <div className = "intro--section">
        <Box sx={{alignItems: 'center', textAlign: 'center', justifyContent: 'center', flexDirection: 'column', flexDirection: 'column', height: '100vh', display: 'flex'}}>
        <div className = "intro--heading">
          <Heading as="h1" variant="h1" mb={4} color="black" sx={{fontSize: '70px'}}>
            Hey, I'm Kaden
          </Heading>
        </div>
        <div className = "intro--content">
          <p>
            A freshman at Duke studying CS and Math who is passionate about <br />web development and data science
          </p>
        </div>
        <button className="button-intro">Projects</button>
        </Box>
     </div>
        
     </>
    )
}

export default Home;