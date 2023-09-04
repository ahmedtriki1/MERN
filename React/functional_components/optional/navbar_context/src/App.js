import './App.css';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import Navbar from './components/Navbar';
import { createContext ,useState} from 'react';
export const MyContext = createContext();
function App() {  
  const [Name, setName] = useState("");
  return (
    <div className="App">
    <MyContext.Provider value={[Name,setName]}>
      <Wrapper> 
      <Navbar/>
      <FormWrapper/>
      </Wrapper>
    </MyContext.Provider>
    </div>
  );
}

export default App;