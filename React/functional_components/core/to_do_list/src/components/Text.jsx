import React, {useState} from 'react'

function Text(props) {
    const [completed, setCompleted] = useState(false);
    const delete_to_do=(idx)=>{
    const newlist= props.list.filter((item,index)=>{
        return idx !== index
    })
    props.setlist_to_do(newlist);
    }
    return (
    <div>
        <h1 style={{ textDecoration:completed ?'line-through' : null }} >{props.text}</h1>
        <input onChange={(e)=>{setCompleted(!completed)}} type="checkbox" checked={completed}/>
        <button onClick={()=>{delete_to_do(props.idx)}}>Delete</button>
    </div>
    )
}

export default Text