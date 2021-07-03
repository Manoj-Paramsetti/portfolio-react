import React from 'react';
const Nav = (props) => {
    const NAV = ()=>{
        if (props.page === "About"){       
            return(
            <ul>
                <a href="/" style={{color: "#FF5555"}}>About </a>
                <a href = "/technology" >Technology </a>
                <a href = "/projects" >Projects </a>
                <a target="_blank" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view" rel="noreferrer">Resume</a>
            </ul>
            );
        }
        else if (props.page === "Technology"){       
            return(
            <ul>
                <a href= "/" >About </a>
                <a href="/technology" style={{color: "#FF5555"}} >Technology </a>
                <a href = "/projects" >Projects </a>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view">Resume</a>
            </ul>
            );
        }
        else if (props.page === "Projects"){       
            return(
            <ul>
                <a href= "/">About </a>
                <a href= "/technology" >Technology </a>
                <a href="/projects" style={{color: "#FF5555"}} >Projects </a>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1yJRO9gsKzwjuYChZ7v8P5DOxutcAhAEF/view">Resume</a>
            </ul>
            );
        }
    }
    
    return(
        <section id="NavBar">
        <NAV />
            <div id="NavBar__Left__Part">
                <label for="check">
                    <input type="checkbox" id="check"/> 
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>
            <div id="NavBar__Right__Part">
                <span id="linkedin">
                    <a rel="noreferrer" href="http://linkedin.com/in/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/linkedin.svg" alt="" height = "25px" srcset="" /></a>
                </span>
                <span id="github">
                    <a rel="noreferrer" href="http://github.com/Manoj-Paramsetti" target="_blank"> <img src="https://icons.getbootstrap.com/assets/icons/github.svg" alt=""  height = "29px" srcset="" /></a>
                </span>
            </div>
        </section>
    );
}
export default Nav;