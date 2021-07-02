import React from 'react';
import Nav from '../components/nav';

function About(){

    return(
        <div>
            <Nav page="About" />
            <section style={{height:"128px"}}>
            </section>
            <section id="Home">

                <section id="img">
                </section>
                {'\n'}
                <h1><b style={{color : "#ee5253"}}>
                Hi!</b> This is Paramsetti Manoj
                </h1>
                <p style={{ opacity: "0.8"}}>I love to tc of <b>Security Management</b> and <b>Software Development</b></p>
                {'\n\n'}
                <div id="aboutMe" >
                    <h2>About Me</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px", paddingLeft: "20px", paddingRight: "20px", textAlign: "justify"}}>
                    I'm pursuing my UG degree in Computer Science and Engineering (2020-2024)
                    at Sathyabama University, Chennai, India. I'm also a Technical Team Member at Google Developer Student Club. I'm seeking an internship opportunity 
                    in software development. Currently, I'm preparing myself for DevSecOps. 
                    {'\n\n'}I like to spend my time on Hackathons, Competitive Programming, developing my apps and bot, and CTF Challenges. Feel free to invite me, If you're looking for a member in Hackathon and CP : D
                    {'\n\n'}You can reach me out on <b><a rel="noreferrer" href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank">LinkedIn</a></b> and Discord (Manoj Paramsetti#4427) : P</p>
                    {'\n\n'}Don't forget to check out my Technology and Projects page : )
                </div>
            </section>
        </div>
    )
}

export default About;