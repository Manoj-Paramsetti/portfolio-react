import { Route } from "react-router-dom";
import About from './routes/About';
import Technology from './routes/Technology';
import Projects from './routes/Projects';
import './App.css'

function Routes() {
    return ( 
        <div className = "App">
            <Route exact path = "/" component = { About }/>  
            <Route exact path = "/technology" component = { Technology }/>  
            <Route exact path = "/projects" component = { Projects }/>  
        </div >
    );
}


export default Routes
