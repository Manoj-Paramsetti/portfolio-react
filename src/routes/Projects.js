import React from 'react';
import Nav from '../components/nav';
import Main from '../components/ProjectMainComponent';
function Project(){

    return(
        <div>
            <Nav page="Projects" />
        
        <section style={{height:"88px"}}>
            <h1 style={{fontSize: "33px", 
            fontFamily: 'Montserrat',
            fontWeight: 600,
            color: "#FF5555",
            textAlign: "center"}}>
                Projects
            </h1>
        </section>
        <Main />
    </div>
    )
}

export default Project;