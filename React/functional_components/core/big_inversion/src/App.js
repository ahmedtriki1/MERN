import Personcard from "./components/Personcard";
const data=[{
  firstName:'Doe',
  lastName:'Jane',
  age:45,
  haircolor:'Black'
},
{
  firstName:'Smith',
  lastName:'john',
  age:88,
  haircolor:'Brown'
},
{  firstName:'Fillmore',
lastName:'Millard',
age:50,
haircolor:'Brown'},
{
  firstName:'Smith',
  lastName:'Maria',
  age:62,
  haircolor:'Brown'
}
]
function App() {
  return (
    <div className="App">
      {data.map((person,idx)=>{
      return <Personcard person={person} key={idx}/>
    })
    } 
    </div>
  );
}

export default App;