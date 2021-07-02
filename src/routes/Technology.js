import React from 'react';
import Nav from '../components/nav'
function Tech(){

    return(
        <div>
            <Nav page="Technology" />
            <section style={{height:"88px"}}>
            </section>
            <h2 style={{color: "#ee5253"}}>Technology Skills</h2>
            <div style={{ textAlign:"start" , fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px", paddingLeft: "40px", paddingRight: "40px"}}>
                {"\n\n"}<b>Programming Languages:</b>{'\n\n'}
                <ul style={{opacity: "0.7"}}>
                    <li>Python  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>JavaScript  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>CPP  <l style={{opacity: "0.7"}}>(Comfortable)</l></li>
                    <li>Java  <l style={{opacity: "0.7"}}>(Comfortable)</l></li>
                    <li>Kotlin  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>Dart  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>C  <l style={{opacity: "0.7"}}>(Less Comfortable)</l></li>
                    <li>C#  <l style={{opacity: "0.7"}}>(Familiar)</l></li>
                </ul>
                {"\n\n"}<b>Framework & Software Development Skills:</b>{'\n\n'}
                <ul style={{opacity: "0.7"}}>
                    <li>Flutter  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>NodeJS  <l style={{opacity: "0.7"}}>(Comfortable)</l></li>
                    <li>ReactJS  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>Native Mobile Apps  <l style={{opacity: "0.7"}}>(Comfortable)</l></li>
                    <li>ExpressJS  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>REST API  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>.NET  <l style={{opacity: "0.7"}}>(Familiar)</l></li>
                </ul>
                {"\n\n"}<b>Other Development Skills</b>{'\n\n'}
                <ul style={{opacity: "0.7"}}>
                    <li>Docker  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>Heroku, Vercel, and Netlify  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>SASS, SCSS, CSS, HTML  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>MongoDB  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>MySQL  <l style={{opacity: "0.7"}}>(slightly Comfortable)</l></li>
                    <li>Git & GitHub  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                    <li>Postman  <l style={{opacity: "0.7"}}>(Highly Comfortable)</l></li>
                </ul>
                {'\n\n'}
                You can find all the projects with this tech stack in LinkedIn and GitHub
            
            </div>
        </div>
    )
}

export default Tech;