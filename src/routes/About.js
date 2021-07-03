import React, {useState}from 'react';

var drawer = false;


function About(){
    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden")
    
    function Drawer(){
        return(
            <div className={DrawerBG}>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'} 
                    <a href="/" style={{color: "#FF5555"}}>About </a>{'\n\n'}
                    <a href = "/technology" >Technology </a>{'\n\n'}
                    <a href = "/projects" >Projects </a>{'\n\n'}
                    <a target="_blank" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view" rel="noreferrer">Resume</a>
                </div>
            </div>
        );
    }
    function DrawerManager(){
        if (drawer){
            setDrawerSlide("DrawerHidden");
            setDrawerBG("DrawerBGHidden")
            drawer=false;
        }
        else{
            setDrawerSlide("Drawer");
            setDrawerBG("DrawerBG")
            drawer=true;
        }
    }
    return(
        <div>
            <Drawer />
        <section id="NavBar">
            <div id="NavBar__Left__Part">
                <label for="check">
                    <input type="checkbox" onClick={ DrawerManager }id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div id="NavBar__Right__Part">
                <span id="linkedin">
                    <a rel="noreferrer" href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height = "25px" srcset="" /></a>
                </span>
                <span id="Github">
                    <a rel="noreferrer" href="http://github.com/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt=""  height = "29px" srcset="" /></a>
                </span>
            </div>
        </section>
            
            <section style={{height:"128px"}}>
            </section>
            <section id="Home">

                <section id="img">
                </section>
                {'\n'}
                <h1 style={{ opacity: "0.9"}}><b style={{color : "#ee5253"}}>
                Hi!</b> This is Paramsetti Manoj
                </h1>
                <p style={{ opacity: "0.7"}}>I love to tc of <b>Security Management</b> and <b>Software Development</b></p>
                {'\n\n'}
                <div id="aboutMe" >
                    <h2 style={{ opacity: "0.9"}}>About Me</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                    I'm pursuing my UG degree in Computer Science and Engineering (2020-2024)
                    at Sathyabama University, Chennai, India. I'm also a Technical Team Member at Google Developer Student Club. I'm seeking an internship opportunity 
                    in software development. Currently, I'm preparing myself for DevSecOps. 
                    {'\n\n'}I like to spend my time on Hackathons, Competitive Programming, developing my apps and bot, and CTF Challenges. Feel free to invite me, If you're looking for a member in Hackathon and CP : D
                    {'\n\n'}You can reach me out on <b><a rel="noreferrer" href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank" className="LINK">LinkedIn</a></b> and Discord (Manoj Paramsetti#4427) : P</p>
                    {'\n\n'}Don't forget to check out my Technology and Projects page : )
                </div>
            </section>
        </div>
    )
}

export default About;