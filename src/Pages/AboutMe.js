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
    const skillsFront = ['HTML', 'CSS', 'React Basics', 'Theme-UI', 'Figma'];
    const skillsBack = ['Java', 'Python', 'C Basics'];
    const skillsData = ['STATA', 'R', 'Pandas', 'NumPy'];
    const skillsDev = ['VSCode', 'GIT', 'GitHub'];
    return(
        <div className="about">
            <div className = "about--title">
                <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <h1>About Me</h1>
                <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
                </Flex>
            </div>
            <div className = "about--grid">
            <Grid columns={[1, null, 2]} gap={5} sx={{pt: '100px', pb: '100px'}}>
                <Box>
                <div className = "about--info">
                    <Heading sx={{fontSize: '30px'}}>Get To Know Me!</Heading>
                    <p>I was born in Boston them moved to Potomac, Maryland when I was 7. From there I moved down to Durham, NC, where I'm now a freshman at Duke studying Math and CS.</p>
                    <p>As an aspiring developer, I'm working on a couple of projects right now such as website mockups and some functional full stack web apps (some super cool stuff coming soon).</p>
                    <p>I'm a huge fan of Boston Sports, especially the Celtics, and love listening to music. My favorite artists include Tyler, The Creater and wave to earth. I also really enjoy following fashion, and my favorite brand to follow is Maison Margiela.</p> 
                    <p>I'm super excited to learn and grow, and am open to any opportunities where I can develop my skills. Feel free to connect with me on LinkedIn, or contact me!</p>  
                    <br />
                    <button className="button-intro">Contact</button>
                </div>
                </Box>

                <Box>
                <div className = "about--skills">
                    <Heading sx={{fontSize: '30px'}}>My Skills</Heading>
                    <h3>Front-End</h3>
                    <Flex sx={{flexDirection: 'row', pb: '10px'}}>
                    {skillsFront.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '40px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '15px'}}>
                        {skill}
                        </Box>
                    </React.Fragment>
                    ))}
                    </Flex>

                    <h3>Back-End</h3>
                    <Flex sx={{flexDirection: 'row'}}>
                    {skillsBack.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '40px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '15px'}}>
                        {skill}
                        </Box>
                    </React.Fragment>
                    ))}
                    </Flex>

                    <h3>Data Science</h3>
                    <Flex sx={{flexDirection: 'row'}}>
                    {skillsData.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '40px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '15px'}}>
                        {skill}
                        </Box>
                    </React.Fragment>
                    ))}
                    </Flex>
                    <h3>Developer Tools</h3>
                    <Flex sx={{flexDirection: 'row'}}>
                    {skillsDev.map((skill, index) => (
                    <React.Fragment key={index}>
                        <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '40px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '15px'}}>
                        {skill}
                        </Box>
                    </React.Fragment>
                    ))}
                    </Flex>
                </div>
                </Box>
            </Grid>
            </div>    
        </div>
    )
}

export default AboutMe;