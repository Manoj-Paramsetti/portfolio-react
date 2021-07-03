import Routes from './Routes'; 


if (localStorage.getItem('Theme')==="true"){
    document.body.classList.add('body');
}
else{
    document.body.classList.remove('body');
}
function App() {
    return ( 
       <Routes />
    );
}


export default App;