import React from "react";
import styles from '../Styles/pages/Home.css';
import{
    Label,
    Flex,
    Button,
    Input,
    Textarea,
    Box
  } from 'theme-ui';

function Contact(){
    return(
        <>
        <div className = "contact">
            <div className="contact--title">
            <h1>Contact Me!</h1>    
            </div>
            <form action="submit_form.php" method="post">
                <Flex sx = {{width: '400px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <Label htmlFor="name">Name:</Label>
                    <Input type="text" id="name" name="name" required />

                    <Label htmlFor="email">Email:</Label>
                    <Input type="email" id="email" name="email" required />

                    <Label htmlFor="message">Message:</Label>
                    <Textarea id="message" name="message" rows={4} required />

                    <Flex sx={{ justifyContent: 'flex-end' }}>
                    <Button type="submit">Submit</Button>
                </Flex>

                </Flex>
            </form>
        </div>
        </>
    )
}

export default Contact;