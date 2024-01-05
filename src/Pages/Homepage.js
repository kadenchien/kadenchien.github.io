import React from "react";
import styles from '../Styles/pages/Home.css';

import{
    Box,
    Button,
    Grid
  } from 'theme-ui';

function Home(){
    return(
     <>
        <Grid gap={2} columns={[2, '1.5fr 2fr']}>
        <Box>
          <div className="intro--grid">
                <div className = "intro--content">
                    <h1 className="intro--title">Hey, I'm Kaden!</h1>
                    <h2 className = "intro--heading">
                        A freshman at Duke <br/> studying CS and Math
                    </h2>
                    <p className = "intro--description">
                        Sample text here
                    </p>
                  <a href="mailto:kaden.chien@duke.edu">
                    <button className="button-contact">Contact Me!</button>
                  </a>
                </div>
           </div>
        </Box>
        <div className="intro--photo">
          <Box align = "center">
          <img src="./img/photo.jpeg" />
          </Box>
        </div>
        </Grid>
     </>
    )
}

export default Home;