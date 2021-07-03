import React, {useState}from 'react';

var drawer = false;

function Tech(){

    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden")
    
    function Drawer(){
        return(
            <div className={DrawerBG}>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'} 
                    <a href= "/" >About </a>{'\n\n'}
                    <a href="/technology" style={{color: "#FF5555"}} >Technology </a>{'\n\n'}
                    <a href = "/projects" >Projects </a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://manoj-writes.hashnode.dev/">Blog</a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view">Resume</a>
                    {'\n\n\n'}
                    <h5 style={{opacity: "0.6", fontFamily: "Work Sans"}}>Contact</h5>{'\n'}
                    <a target = "_blank" rel="noreferrer" href = "mailto:paramsetti.manoj@gmail.com"  >E-mail </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://linkedin.com/in/manoj-paramsetti"  >LinkedIn </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://discord.com/users/777906489498271765"  >Discord </a>{'\n\n'}
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
                        <input type="checkbox" id="check" onClick={DrawerManager}/> 
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
                <section style={{height:"88px"}}>
                
                </section>
            </div>
        </div>
    )
}

export default Tech;