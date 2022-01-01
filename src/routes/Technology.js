import React, {useState, useEffect} from 'react';

var drawer = false;

function Tech(){

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
                    <a href= "/" >About </a>{'\n\n'}
                    <a href="/technology" style={{color: "#FF5555"}} >Technology </a>{'\n\n'}
                    <a href = "/projects" >Projects </a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://manoj-writes.hashnode.dev/">Blog</a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ROYK9tE3kjzJhp-7a0i_chp0-mS-DVT2/view">Resume</a>
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
                        <input type="checkbox" checked={drawer} id="check" onClick={DrawerManager}/> 
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
                You can find all the above tech stack's projects on my <b><a rel="noreferrer" href="http://github.com/Manoj-Paramsetti" target="_blank" className="LINK">GitHub</a></b>
                {'\n\n\n'}
                <i style={{opacity: 0.3}}>
                Last Modified on: 01-01-2022
                </i>
                <section style={{height:"88px"}}>
                
                </section>
            </div>
        </div>
    )
}

export default Tech;