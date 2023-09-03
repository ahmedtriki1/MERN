import Putting_it_Together from "./components/Putting_it_Together"; 
import './App.css';
const data=[{
  firstName:'Doe',
  lastName:'Jane',
  age:50,
  haircolor:'Black'
},
{
  firstName:'Smith',
  lastName:'john',
  age:88,
  haircolor:'Brown'
}
]
function App() {
  return (
    <div className="App">
      {data.map((person,idx)=>{
      return <Putting_it_Together person={person} key={idx}/>
    })
    } 
    </div>
  );
}

export default App;