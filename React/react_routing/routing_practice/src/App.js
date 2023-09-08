import './App.css';
import {Route, Routes} from 'react-router-dom';
import Welcome from './components/Welcome';
import Number from './components/Number';
import ShowColor from './components/ShowColor';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/home" element={<Welcome/>}/>
      <Route path="/:num" element={<Number/>}/>
      <Route path="/:word/:color1/:color2" element={<ShowColor/>}/>
    </Routes>
    </div>
  );
}
export default App;