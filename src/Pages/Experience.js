import React from "react";
import styles from '../Styles/pages/Home.css';
import{
    Box,
    Flex,
    Text,
    Link,
    Grid
  } from 'theme-ui';


  const ExperienceFrame = ({place, role, description,  date}) => (

    
        <Flex sx={{flexDirection: 'row', marginLeft: '31%', width: '800px', marginBottom: '50px', marginTop:'50px', overflow: 'hidden'}}>
            <Flex sx={{width: '180px', justifyContent: 'flex-end'}}><Text sx={{color: 'gray', marginTop: '4px', }}>{date}</Text></Flex>
            <Box sx={{bg: 'primary', borderRadius: '50px', width: '10px', height: '10px', marginLeft: '30px', marginRight: '30px', marginTop: '13px', position: 'relative'}}>
            <Box sx={{ bg: 'primary', width: '2px', height: '200px', transform: 'translateX(-50%)', position: 'absolute', left: '50%', top: '50%', }}></Box>
            </Box>
            <Flex sx={{flexDirection: 'column', width: '500px'}}>
                <Text sx={{fontSize: '20px', fontWeight: '800', marginTop: '1px'}}>{place}</Text>
                <Text sx={{fontSize: '15px', color: 'gray', marginTop: '-3px'}}>{role}</Text>
                <Text sx={{fontSize: '13px', marginTop: '5px'}}> {description}</Text>
            </Flex>
        </Flex>
    );

function Experience(){
    const experiences = [
        {
            place: 'Duke Impact Investing Group',
            role: 'Data Analyst',
            description: 'DIIG is a group at Duke that provides services to various social impact organizations in the Durham area. For Fall 23, I worked with Cup-Ji, an instant green tea company, helping them with expanding to the US market. For Spring 24, I moved over to the data division, so I will be working with Recursion, a mortgage data provider, helping them with data dashboard creation and analyzing loan characteristics.',
            date: 'Oct 2023 - Present'
        }, {
            place: 'Duke Consulting Club',
            role: 'Consulting Associate',
            description: 'I conducted pro-bono consulting for Sparc, a talent acquisition platform similar to Handshake or Elevate. My work for them included analyzing UI/UX and proposing possible changes, as well as creating a go-to-market strategy for their expansion.',
            date: 'Oct 2023 - Present'
        }, {
            place: 'Johns Hopkins University',
            role: 'Healthcare Data Analyst',
            description: 'I worked at Hopkins my Junior year of high school, at the Bloomberg School of Public Health. My research investigated how skin color affects hearing loss using data from the NHANES public health database. I imported and cleaned the data in STATA, then conducted various statistical analyses such as interaction term regressions, and concluded that there is a significant effect of skin color on hearing loss, where individuals with darker skin responded less harshly to hearing risk factors such as noise exposure.',
            date: 'May 2022 - Dec 2022'
        }, {
            place: 'Harvard Business School',
            role: 'Economics Research Intern',
            description: "I completed two summer projects at HBS under the mentorship of Professor Charles Wang. The first summer was spent on financial valuation techniques, specifically looking at the DuPont Decomposition of Return on Equity and writing a teaching note about that. The second summer we looked at Starbucks' unionization and how the leadership of Starbucks affected that movement. Specifically, we wanted to look at the broader New Labor Movement and see how and why so many workers were unionizing.",
            date: 'Jul 2021 - Aug 2022'
        }, 
    ]

    return(
        <div className = "experience">
        <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pt: '70px'}}>
            <div className = "experience--title">
            <h1>Experience</h1>
            </div>
            <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
        </Flex>
        {experiences.map((experiences, index) => (
            <ExperienceFrame key={index} {...experiences} />
        ))}
    </div>
    )
}

export default Experience;