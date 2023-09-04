import Boxgenerator from "./components/Boxgenerator";
import { useState } from "react";
import Form from "./components/Form";
function App() {
  const [colors,setcolor]=useState([{color:"red",width:'100'},{color:"blue",width:'100'},{color:"purple",width:'100'}])
  
  return (
    <div className="App">
      <Form setcolor={setcolor} colors={colors}  />
      {colors.map((color,idx)=>{
        return <Boxgenerator color={color} key={idx} />
      })}
    </div>
  );
}

export default App;