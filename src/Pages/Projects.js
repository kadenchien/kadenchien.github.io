import React from "react";

import {
    Card,
    Box,
    Flex,
    Image,
    Heading,
    Text,
    Link
} from 'theme-ui';

const Project = ({title, description, imageUrl, link}) => (
<Box p={4} mb={4} borderRadius="8px">
<Flex sx={{ flexDirection: ['column', 'row'], alignItems: 'center' }}>
  <Box mb={[3, 0]} mr={[0, 4]} sx={{ flex: '0 0 auto' }}>
    <Image src={imageUrl} alt={title} sx={{ maxWidth: '850px', borderRadius: '8px' }} />
  </Box>
  
  <Box sx={{ flex: '1 1 auto' }}>
    <Heading as="h2" color="Black" sx={{fontWeight: '700', pb: '15px'}}>
      {title}
    </Heading>
    <Text>{description}</Text>
    <Box sx={{pt: '20px'}}>
    <button className="button-projects">View in GitHub</button>
    </Box>
  </Box>
</Flex>
</Box>
);

function projects() {
    const projects = [
        {
            title: 'Python Automation',
            description: 'I made a few python scripts to automate some everyday tasks including file cleaning!',
            imageUrl: './img/automation.png',
            link: 'https://github.com/kadenchien/FileCleaner',
        },
        {
            title: 'Nike Product Web Mockup',
            description: 'I made a website mockup for a Nike product using HTML and CSS!',
            imageUrl: './img/nike.png',
            link: 'https://github.com/kadenchien/FileCleaner',
        }
    ]
    return (
    <div className = "projects">
        <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '30px'}}>
            <h1>Projects</h1>
            <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
            <div className = "projects--header">
            <p>Here are some of the projects I've completed or am currently working on!</p>
            </div>
        </Flex>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
    </div>
    )
}

export default projects;