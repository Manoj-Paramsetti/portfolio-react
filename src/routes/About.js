import React, {useState, useEffect}from 'react';

var drawer = false;


function About(){
    
    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden");
    const [toggle, setToggle] = useState(false);
    const [navBar, setNavBar] = useState("NavBar");

    function DrawerManager(){
        if (drawer){
            if (localStorage.getItem('Theme')==="true"){
                drawer=false;
                setDrawerSlide("DrawerHidden-Dark");
                setDrawerBG("DrawerBGHidden");
            }
            else{
                drawer=false;
                setDrawerSlide("DrawerHidden");
                setDrawerBG("DrawerBGHidden");
            }
        }
        else{
            if (localStorage.getItem('Theme')==="true"){
            drawer=true;
            setDrawerSlide("Drawer-Dark");
            setDrawerBG("DrawerBG");
        }
        else{
            drawer=true;
            setDrawerSlide("Drawer");
            setDrawerBG("DrawerBG");
        }
        }
    }
    useEffect(()=>{if (localStorage.getItem('Theme')==="true"){
            setToggle(true);
            setNavBar("NavBar-Dark");
    }},[]);
    function ModeManager(){
        if (localStorage.getItem('Theme')==="true"){
            setToggle(false);
            localStorage.setItem('Theme', 'false')
            document.body.classList.remove('body');
            setNavBar("NavBar");
            drawer=false;
            setDrawerSlide("DrawerHidden");
            setDrawerBG("DrawerBGHidden");
        }
        else{
            localStorage.setItem('Theme', 'true');
            document.body.classList.add('body');
            setNavBar("NavBar-Dark");
            setToggle(true);
            drawer=false;
            setDrawerSlide("DrawerHidden-Dark");
            setDrawerBG("DrawerBGHidden");
        }
    }




    function Drawer(){
        return(
            <div className={DrawerBG}>
                <div className={DrawerBG} onClick={DrawerManager}>
                </div>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'} 
                    <a href="/" style={{color: "#FF5555"}}>About </a>{'\n\n'}
                    <a href = "/technology" >Technology </a>{'\n\n'}
                    <a href = "/projects" >Projects </a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://manoj-writes.hashnode.dev/">Blog</a>{'\n\n'}
                    <a target="_blank" href="https://drive.google.com/file/d/1ROYK9tE3kjzJhp-7a0i_chp0-mS-DVT2/view" rel="noreferrer">Resume</a>
                    {'\n\n'}<hr style={{width: "80%", margin: "auto", opacity: "0.2"}} />{'\n'}
                    <a target = "_blank" rel="noreferrer" href = "mailto:paramsetti.manoj@gmail.com"  >E-mail </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://linkedin.com/in/manoj-paramsetti"  >LinkedIn </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://discord.com/users/777906489498271765"  >Discord </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://t.me/ManojParamsetti"  >Telegram </a>{'\n'}
                    {'\n'}<b>Dark Mode:</b><div class="toggleWrapper">
                    <input type="checkbox" name="toggle2" checked={toggle} onClick={ModeManager} class="mobileToggle" id="toggle2" />
                    <label for="toggle2"></label>
                    </div>
                </div>
            </div>
        );
    }
    
    return(
        <div>
            <Drawer />
        <section id={navBar}>
            <div id="NavBar__Left__Part">
                <label for="check">
                    <input type="checkbox" onClick={ DrawerManager } checked={drawer} id="check"/> 
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
                    {'\n'}
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                        I'm pursuing my UG degree in Computer Science and Engineering (2020-2024)
                        at Sathyabama Institute of Science and Technology (SIST), Chennai, India. 
                        {'\n\n'}
                        I like to spend my time on Hackathons, Competitive Programming, developing my apps, bot, and CTF Challenges. Feel free to invite me, If you're looking for a member in Hackathon and CP :D
                    </p>
                        {'\n'}
                        
                    <h2>Work & Experience</h2>
                    <p style={{ opacity: "0.8", fontFamily: "Work Sans", marginLeft: "auto", marginRight: "auto", maxWidth: "720px",  textAlign: "justify"}}>
                        {'\n'}
                        - Technical Head at Microsoft Club (SIST)
                        {'\n'}
                        - Special Interest Coordinator in Google Developer Student Club (SIST)
                        {'\n'}
                        - Frontend developer at TechSnap, India
                        {'\n'}
                        - Technical Team Member at Google Developer Student CLub (Season 4) 
                        {'\n\n  '}
                        I'm seeking an internship opportunity 
                        in software development. Currently, I'm preparing myself for DevSecOps. 
                        {'\n\n'}
                        {'\n\n'}
                    </p>
                        You can reach me out on 
                        <b>
                            <a rel="noreferrer" href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank" className="LINK">
                                {''} <u>LinkedIn</u>
                            </a> 
                        </b>
                            {''} and {''}
                        <b> 
                            <a target = "_blank" rel="noreferrer" href="https://discord.com/users/777906489498271765">
                            <u>Discord</u> </a>
                        </b>
                            (Manoj Paramsetti#4427) ✨

                    {'\n\n'}
                    Don't forget to check out my <b>
                        <a rel="noreferrer" href="https://manojparamsetti.vercel.app/technology" target="_blank" className="LINK">
                            <u>Technology</u>
                        </a></b> and <b><a target = "_blank" rel="noreferrer" href = "https://manojparamsetti.vercel.app/projects"  >
                            <u>Projects</u>
                        </a></b> page
                        {'\n'}
                        {'\n'}
                        {'\n'}
                        <i style={{opacity: 0.3}}>
                            Last Modified on: 01-01-2022
                        </i>
                </div>
            </section>
        </div>
    )
}

export default About;