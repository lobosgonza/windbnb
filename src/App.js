import logo from './logo.svg';
import Data from "./stays.json";


function App() {

  console.log(Data);
  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     <img src={logo}></img> 
    </div>
  );
}

export default App;
