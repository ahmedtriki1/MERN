import List from './components/List';
import Text from './components/Text';
import './App.css';
import { useState } from 'react';

function App() {
  const [list_to_do,setlist_to_do]=useState([]);
  return (
    <div className="App">
      <List setlist_to_do={setlist_to_do} list={list_to_do}/>
    {list_to_do.map((item,idx)=>{
      return <Text text={item} key={idx} setlist_to_do={setlist_to_do} list={list_to_do} idx={idx}/>
    })
    } 
    </div>
  );
}

export default App;