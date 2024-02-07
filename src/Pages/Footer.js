import React from "react";
import styles from '../Styles/pages/Home.css';
import{
    Text,
    Flex,
    Link,
    Image,
    Textarea,
    Box,
    Grid
  } from 'theme-ui';

function Footer(){
  return (
    <div className="footer">
    <Flex sx={{flexDirection: 'column', pl: '70px', pr: '70px', pt: '50px'}}>
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Flex sx={{flexDirection: 'column'}}>
        <Text sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>Kaden Chien</Text>
        <Text sx={{color: 'black', fontSize: '10px'}}>This page was made using React, JS, HTML, and CSS! </Text>
      </Flex>

      <Flex sx={{flexDirection: 'column', alignItems: 'flex-end'}}>
        <Text sx={{ fontSize: '18px', fontWeight: 'bold', color: 'black', }}>Socials</Text>
        <Flex sx={{ alignItems: 'center' }}>
          <Link href="https://github.com/kadenchien" target="_blank" rel="noopener noreferrer" sx={{ marginRight: '15px' }}>
            <Image src="/img/github.png" alt="GitHub" sx={{ width: '30px', height: 'auto' }} />
          </Link>
          <Link href="https://www.linkedin.com/in/kadenchien" target="_blank" rel="noopener noreferrer" sx={{ marginRight: '15px' }}>
            <Image src="/img/linkedIn.png" alt="LinkedIn" sx={{ width: '30px', height: 'auto' }} />
          </Link>
          <Link href="https://www.instagram.com/kadenchien" target="_blank" rel="noopener noreferrer" sx={{}}>
            <Image src="/img/instagram.png" alt="LinkedIn" sx={{ width: '30px', height: 'auto' }} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
    <Box sx={{ width: '100%', borderBottom: '2px solid black', my: '15px', pt: '20px' }} />
    </Flex>
    </div>
  );
};

export default Footer;