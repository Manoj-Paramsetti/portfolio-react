import React, {useState}from 'react';

import Main from '../components/ProjectMainComponent';

var drawer = false;

function Project(){

    const [DrawerSlide, setDrawerSlide] = useState("DrawerHiddenInitial")
    const [DrawerBG, setDrawerBG] = useState("DrawerBGHidden")
    
    function Drawer(){
        return(
            <div className={DrawerBG}>
                <div className={DrawerSlide}>
                    {'\n\n\n\n'} 
                    <a href= "/" >About </a>{'\n\n'}
                    <a href="/technology"  >Technology </a>{'\n\n'}
                    <a href = "/projects" style={{color: "#FF5555"}} >Projects </a>{'\n\n'}
                    <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view">Resume</a>
                    {'\n\n\n'}
                    <h5 style={{opacity: "0.6", fontFamily: "Work Sans"}}>Contact</h5>{'\n'}
                    <a target = "_blank" rel="noreferrer" href = "mailto:paramsetti.manoj@gmail.com"  >E-mail </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://linkedin.com/in/manoj-paramsetti"  >LinkedIn </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://discord.com/users/777906489498271765"  >Discord </a>{'\n\n'}
                    <a target = "_blank" rel="noreferrer" href = "https://t.me/ManojParamsetti"  >Telegram </a>{'\n\n'}
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
            <section style={{height:"88px"}}>
                
            </section>
            <Main />
        </div>
    )
}

export default Project;