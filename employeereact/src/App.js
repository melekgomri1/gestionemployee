import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {x,name} from'./Test';

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="name" ></input>
     <h1 style={{color:"blue",fontSize:"100px"}}>Hello world</h1>
     <h1>{x} and {name}</h1>
     <Home/>
    </div>
  );
}

export default App;
