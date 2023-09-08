import './App.css';
import Form from './components/Form';
import Display from './components/Display'
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* <Form />     */}
    <Routes> 
      <Route path="/" element={<Form/>}/>
        
      <Route path="/:type/:id" element={<Display/>}/>
    </Routes>
    </div>
  );
}

export default App;