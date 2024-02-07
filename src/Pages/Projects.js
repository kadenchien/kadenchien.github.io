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

const Project = ({title, description, imageUrl, link, skills, button}) => (
<Box p={4} mb={4} borderRadius="8px">
<Flex sx={{ flexDirection: ['column', 'row'], alignItems: 'center', justifyContent: 'center' }}>
  <Box mb={[3, 0]} mr={[0, 4]} sx={{ flex: '0 0 auto' }}>
    <Image src={imageUrl} alt={title} sx={{ maxWidth: '750px', borderRadius: '8px', pl: '50px', }} />
  </Box>
  
  <Box sx={{ flex: '1 1 auto', pl: '50px', pr: '50px' }}>
    <Heading as="h2" color="Black" sx={{fontWeight: '700', pb: '15px'}}>
      {title}
    </Heading>
    <Text>{description}</Text>
    <Flex sx={{flexWrap: 'wrap', pt: '20px'}}>
      {skills.map((skill, index)=>
        <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '20px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '10px'}}>
          {skill}
        </Box>
        )
      }
    </Flex>
    <Box sx={{pt: '20px'}}>
    <a href={link} target="_blank"><button className="button-projects">{button}</button></a>
    </Box>
  </Box>
</Flex>
</Box>
);

const ProjectProgress = ({title, description, imageUrl, link, skills, button}) => (
  <Box p={4} mb={4} borderRadius="8px">
  <Flex sx={{ flexDirection: ['column', 'row'], alignItems: 'center' }}>
    <Box mb={[3, 0]} mr={[0, 4]} sx={{ flex: '0 0 auto' }}>
      <Image src={imageUrl} alt={title} sx={{ maxWidth: '750px', borderRadius: '8px', pl: '50px', }} />
    </Box>
    
    <Box sx={{ flex: '1 1 auto', pl: '50px', pr: '50px' }}>
      <Heading as="h2" color="Black" sx={{fontWeight: '700', pb: '15px'}}>
        {title}
      </Heading>
      <Text>{description}</Text>
      <Flex sx={{flexWrap: 'wrap', pt: '20px'}}>
        {skills.map((skill, index)=>
          <Box p={3} bg="lightgray" color="rgb(97, 106, 107)" sx={{ textAlign: 'center', marginRight: '10px', width: 'auto', height: '20px', borderRadius: "5px", alignItems: 'center', display: 'flex', fontWeight: '600', fontSize: '10px'}}>
            {skill}
          </Box>
          )
        }
      </Flex>
      <Box sx={{pt: '20px'}}>
      <a href={link}><button className="button-projects-progress">{button}</button></a>
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
            skills: ['Python'],
            button: 'View in GitHub'
        },
        {
            title: 'Nike Product Web Mockup',
            description: 'I made a website mockup for a Nike product using HTML and CSS!',
            imageUrl: './img/nike.png',
            link: 'https://github.com/kadenchien/NikeMockWebsite',
            skills: ['HTML', 'CSS', 'JavaScript'],
            button: 'View in GitHub'
        },
    ]
    const projectsProgress = [
      {
        title: 'Sports Betting Arbitrage App',
        description: "I'm currently working on a project that scrapes sports betting odds from various websites such as PrizePicks and FanDuel, then compares it among sites to look for discrepancies for potential positive EV bets.",
        imageUrl: './img/betting.png',
        skills: ['HTML', 'CSS', 'Next', 'JavaScript', 'SQL', 'Python'],
        button: 'Coming Soon'
    },
    ]
    return (
    <div className = "projects">
        <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '20px', pt: '70px'}}>
            <div className = "projects--title">
            <h1>Projects</h1>
            </div>
            <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
            <div className = "projects--header">
            <p>Here are some of the projects I've completed or am currently working on!</p>
            </div>
        </Flex>
        <Box sx={{ alignItems: 'center', justifyContent: 'center', }}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {projectsProgress.map((project, index) => (
          <ProjectProgress key={index} {...project} />
        ))}
        </Box>
    </div>
    )
}

export default projects;