import logo from './logo.svg';
import './App.css';
import Dta from './Profile/Dta';
import Button from './Profile/Button';
import image from './imageP.png'

function App() {
  
  return (
    <div>
     
     <Dta fullName="Jebri Hela" bio="CV" profession="Ingenieure Full Stack" >
      <img style={{
               
         marginLeft: "40%" ,
        
            }}  src ={image}/>
      <Button name="Mohamed"/>
      </Dta>
    </div>
  );
}

export default App;
