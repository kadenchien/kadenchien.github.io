import React from "react";

import {
    Card,
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Grid,
} from 'theme-ui';

function projects() {
    return (
    <div className = "projects">
        <div className="projects--title">
            <h1>Projects</h1>
        </div>
        <Box>
        <div className = "project--container">
            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', }} align = "center">
            <Image src sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
            <Box sx={{ p: '3',  }}>
                <Heading as='h2' mb={2} >Project 1</Heading>
                <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
                <Flex>
                </Flex>
            </Box>
            </Card>


            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', }} align = "center">
            <Image sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
            <Box sx={{ p: '3' }}>
                <Heading as='h2' mb={2} >Project 1</Heading>
                <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
                <Flex>
                </Flex>
            </Box>
            </Card>
            
            
            <Card sx={{ borderRadius: '15px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', }} align = "center">
            <Image sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
            <Box sx={{ p: '3' }}>
                <Heading as='h2' mb={2} >Project 1</Heading>
                <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
                <Flex>
                </Flex>
            </Box>
            </Card>
            </div>
        </Box>
    </div>
    )
}

export default projects;