import React from "react";

import {
    Card,
    Box,
    Image,
    Heading,
    Text,
} from 'theme-ui';

function skills(){
    return(
        <div className = "skills">
            <div className = "skills--title">
            <h1>Skills</h1>
            </div>
            <div className = "skills--container">
            <Card sx={{ borderRadius: '10px', height: '300px', bg: 'rgb(253, 247, 255)', ':hover': {borderBottom: '4px solid var(--primary)',}, }} align = "left">
            <Image src = './img/user-experience (1).png' sx={{ borderRadius: '5px', padding: '8px 8px 8px', marginLeft: '15px', marginTop: '25px', width: '80px'}} />
            <Box sx={{ p: '3', marginLeft: '6px'}}>
                <Heading as='h2' mb={2} >Front-End</Heading>
                <Text mb={3}>I have some experience building websites in HTML and CSS, and am currently picking up React.</Text>
            </Box>
            </Card>

            <Card sx={{ borderRadius: '10px', height: '300px', bg: "rgb(253, 247, 255)",}} align = "left">
            <Image src = './img/program (1).png' sx={{ borderRadius: '5px', padding: '8px 8px 8px', marginLeft: '15px', marginTop: '25px', width: '80px' }} />
            <Box sx={{ p: '3',  marginLeft: '6px'}}>
                <Heading as='h2' mb={2} >Back-End</Heading>
                <Text mb={3}>I have a lot of experience with Java and some Python. Currently, I'm taking a course in C while also learning MongoDB for a project</Text>
            </Box>
            </Card>

            <Card sx={{ borderRadius: '10px', height: '300px', bg: "rgb(253, 247, 255)",}} align = "left">
            <Image src = './img/data-analysis (1).png' sx={{ borderRadius: '5px', padding: '8px 8px 8px', marginLeft: '15px', marginTop: '25px', width: '80px'}} />
            <Box sx={{ p: '3',  marginLeft: '6px'}}>
                <Heading as='h2' mb={2} >Data Analysis</Heading>
                <Text mb={3}>I'm familiar with STATA, R, and Excel, and am learning Pandas and Numpy for python dataframe manipulation </Text>
            </Box>
            </Card>

            <Card sx={{ borderRadius: '10px', height: '300px', bg: "rgb(253, 247, 255)",}} align = "left">
            <Image src = './img/laptop.png' sx={{ borderRadius: '5px', padding: '8px 8px 8px', marginLeft: '15px', marginTop: '25px', width: '80px'}} />
            <Box sx={{ p: '3',  marginLeft: '6px'}}>
                <Heading as='h2' mb={2} >Developer Tools</Heading>
                <Text mb={3}>Tools I use include VSCode, Github, and Figma, and I'm currently getting familiar with Bootstrap</Text>
            </Box>
            </Card>
            </div>
        </div>
    )
}

export default skills;