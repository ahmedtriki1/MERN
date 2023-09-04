import React,{useState} from 'react'


function Form(props) {
    const [color,setcolor]=useState("");
    const[fixe,setfixe]=useState("");
    const handleForm = (e) =>{
        e.preventDefault();
        const newcolor={color:color,width:fixe}
        props.setcolor([...props.colors, newcolor])
        setcolor("");
        setfixe("");
    }
    return (
    <div>
        <form  onSubmit={(e)=>{handleForm(e)}}>
        Color: <input onChange={(e)=>{setcolor(e.target.value)}} type="text" value={color}/> <br />
        Fixe: <input onChange={(e)=>{setfixe(e.target.value)}} type="number" value={fixe}/> <br />
        <button>add</button>
        </form>
    </div>
    )
}

export default Form