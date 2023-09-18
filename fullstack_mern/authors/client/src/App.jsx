import Form from './components/Form'
import Show from './components/Showall'
import Update from './components/Update';
import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'

function App() {
  const [refresh,setrefresh]=useState("");
  return (
    <div className="App">
    <h1>Favorite authors</h1>
    
    <Routes>
    <Route path='/new' element={<Form setrefresh={setrefresh}/>} />
    <Route path='/' element={<Show refresh={refresh}/>} />
    <Route path='/Authors/edit/:id' element={<Update />} />
    <Route path='*' element={<p style={{color:"red"}}>We're sorry, but we could not find the author you are looking for !!</p>} />
    </Routes>
    </div>
  );
}

export default App;