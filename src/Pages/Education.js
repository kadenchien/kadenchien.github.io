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

function Education(){
    return(
        <>
        <div className = "education">
            <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '20px'}}>
                
                <div className="education--title">
                <h1>Education</h1>
                </div>
                <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px',}}></Box>
                <Grid gap={0} columns={[2, '0.5fr 4fr']}>
                
                <Flex sx={{pt: '10px', textAlign: 'left', width: '600px'}}>
                    <h2>Duke University</h2>
                </Flex>
                </Grid>
            </Flex>
        </div>
        </>
    )
}

export default Education;