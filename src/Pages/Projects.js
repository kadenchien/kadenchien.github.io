import React from "react";

import {
    Card,
    Box,
    Flex,
    Image,
    Heading,
    Text,
} from 'theme-ui';

function projects() {
    return (
    <div className = "projects">
        <div className="projects--title">
            <h1>Projects</h1>
        </div>
        <Box>
        <div className = "project--container">
            <Card sx={{ borderRadius: '10px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', height: '500px',}} align = "center">
            <Image src = '' sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3', padding: '10px 0px 3px', width: '300px', height: 'auto'}} />
            <Box sx={{ p: '3',  }}>
                <Heading as='h2' mb={2} >Process Automation</Heading>
                <Text mb={3}>I created a folder of python scripts that automates some everyday tasks, updated regularly. Finished examples include <br /> automatic file sorting for downloads and automated price drop email alerts.</Text>
                <Flex>
                </Flex>
            </Box>
            <button className="button-projects"> View In Github</button>
            </Card>


            <Card sx={{ borderRadius: '10px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', height: '500px',}} align = "center">
            <Image src = '' sx={{ padding: '23px 0px 0px', borderTopLeftRadius: '3', borderTopRightRadius: '3',  width: '150px', height: 'auto' }} />
            <Box sx={{ p: '3' }}>
                <Heading as='h2' mb={2}>Sportsbook Odds Scraper</Heading>
                <Text mb={3}>I'm currently working on a full stack application that scrapes sports betting odds from various sites such as DraftKings and PrizePicks, then looks at discrepancies between sites to create positive EV plays</Text>
                <Flex>
                </Flex>
            </Box>
            <button className="button-projects-progress">In Progress</button>
            </Card>
            
            
            <Card sx={{ borderRadius: '10px', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.2)', height: '500px',}} align = "center">
            <Image src = '' sx={{ padding: '2px, 0px, 0px' , borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
            <Box sx={{ p: '3' }}>
                <Heading as='h2' mb={2} >New Music Notifications</Heading>
                <Text mb={3}>Another project in progress is a full stack application where users enter their emails and a list of their favorite artists, and each time an artist releases new music they will receive an email notification.</Text>
                <Flex>
                </Flex>
            </Box>
            <button className="button-projects-progress">In Progress</button>
            </Card>
            </div>
        </Box>
    </div>
    )
}

export default projects;