import React from "react";
import styles from '../Styles/pages/Home.css';
import{
    Box,
    Flex,
    Text,
    Link,
    Grid
  } from 'theme-ui';


  const Schooling = ({school, GPA, major, courses, date}) => (

    
        <Flex sx={{flexDirection: 'row', marginLeft: '31%', width: '800px', marginTop: '50px', marginBottom: '50px', overflow: 'hidden'}}>
            <Flex sx={{width: '180px', justifyContent: 'flex-end'}}><Text sx={{color: 'gray', marginTop: '4px', }}>{date}</Text></Flex>
            <Box sx={{bg: 'primary', borderRadius: '50px', width: '10px', height: '10px', marginLeft: '30px', marginRight: '30px', marginTop: '13px', position: 'relative'}}>
            <Box sx={{ bg: 'primary', width: '2px', height: '200px', transform: 'translateX(-50%)', position: 'absolute', left: '50%', top: '50%', }}></Box>
            </Box>
            <Flex sx={{flexDirection: 'column', width: '500px'}}>
                <Text sx={{fontSize: '20px', fontWeight: '800', marginTop: '1px'}}>{school}</Text>
                <Text sx={{fontSize: '10px', }}><b>GPA:</b> {GPA}</Text>
                <Text sx={{fontSize: '13px', marginTop: '10px'}}> {major}</Text>
                <Text sx={{fontSize: '13px', marginTop: '10px'}}><b>Relevant Coursework: </b>{courses}</Text>
            </Flex>
        </Flex>
    );

function Education(){
    const school = [
        {
            school: 'Duke University',
            GPA: '4.0',
            major: 'B.S. in Computer Science\nB.S. in Mathematics',
            courses: 'Data Structures and Algorithms, Computer Architecture, Everything Data' ,
            date: 'August 2023 - Present'
        }, {
            school: 'Montgomery Blair High School',
            GPA: 'UW: 4.0/4.0, Weighted: 4.8/5.0',
            major: 'Science, Technology, Engineering, and Mathematics Magnet Program',
            courses: 'Intro to Machine Learning, Analysis of Algorithms, Analysis 2 (Multivariable Calculus and Differential Equations), Linear Algebra, ',
            date: 'August 2019 - May 2023'
        }
    ]

    return(
        <div className = "education">
        <Flex sx={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', pb: '20px', pt: '70px'}}>
            <div className = "education--title">
            <h1>Education</h1>
            </div>
            <Box sx={{width: '40px', height: '5px', bg: "primary", my: -10, borderRadius: '50px'}}></Box>
        </Flex>
        {school.map((schooling, index) => (
            <Schooling key={index} {...schooling} />
        ))}
    </div>
    )
}

export default Education;