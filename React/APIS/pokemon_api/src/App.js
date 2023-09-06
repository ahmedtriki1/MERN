import {useState, useEffect} from "react";
import './App.css';

function App() { 
  const [pokemon, setpokemon] = useState([]);

  const fetchpokemon = () =>{

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((serverResponse)=>{
      return serverResponse.json();
    })
    .then((jsonResponse) =>{
      console.log(jsonResponse.results);
      setpokemon(jsonResponse.results)
    })
    .catch((errObj)=>{console.log("❌❌ Got an Error =>", errObj)})    
  }

  return (
    <div className="App">
    <button onClick={fetchpokemon}>Fetch Pokemon</button>
    <ul>
    {pokemon.map((p)=>{
    return(<li>{p.name}</li>) })
    }
    </ul>
    </div>
  );


}

export default App;