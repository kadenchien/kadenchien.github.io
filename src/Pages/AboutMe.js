import React from "react";
import styles from '../Styles/pages/Home.css';
import{
    Box,
    Flex,
    Button,
    Heading,
    Link,
    Grid
  } from 'theme-ui';

function AboutMe(){
    return(
        <div className="about--main">
            <div className = "about--title">
                <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>About Me</h1>
                <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
                </Flex>
            </div>
            <div className = "about--grid">
            <Grid columns={[1, null, 2]} gap={7} sx={{pt: '100px', pb: '100px'}}>
                <Box>
                <div className = "about--info">
                    <Heading sx={{fontSize: '30px'}}>Get To Know Me!</Heading>
                    <p>I'm a freshman at Duke studying CS and Math. I hope to pursue a career in tech, so I'm working on a couple of projects right now such as website mockups and some functional full stack web apps (some super cool stuff coming soon).</p> 
                    <p>My hometown is Potomac, MD, but I'm originally from Boston, so I love watching the Celtics and Patriots. I also love listening to music, and some of my favorite musical artists are Tyler, the Creator, wave to earth, and Giveon.</p>  
                    <p>Feel free to connect with me on LinkedIn </p>  
                </div>
                </Box>

                <Box>
                <div className = "about--skills">
                    <Heading sx={{fontSize: '30px'}}>My Skills</Heading>
                    <h3>Front-End</h3>
                    <Flex sx={{flexDirection: 'row'}}>
                    <Box bg="rgb(211, 211, 211)" sx={{borderRadius: "4px", width: '50px', height: '35px', alignItems: 'center', textAlign: 'middle', marginRight: '10px'}}>
                    <p>a</p>
                    </Box>
                    <Box bg="gray" sx={{borderRadius: "4px", width: '50px', alignItems: 'center', textAlign: 'middle', marginRight: '10px'}}>

                    </Box>
                    <Box bg="gray" sx={{borderRadius: "4px", width: '50px', alignItems: 'center', textAlign: 'middle', marginRight: '10px'}}>

                    </Box>
                    </Flex>
                </div>
                </Box>
            </Grid>
            </div>    
        </div>
    )
}

export default AboutMe;