import React, { useState } from 'react'

function List(props) {
    const [list,setlist]=useState("");

    const handleForm = (e) =>{
    e.preventDefault();
    const newlist=list;
    props.setlist_to_do([...props.list,newlist])  
    setlist("");
    
}
    return (
    <div>
        <form  onSubmit={(e)=>{handleForm(e)}}>
        <input onChange={(e)=>{setlist(e.target.value)}} type="text" value={list}/> <br />
        <button>add</button>
        </form>
    </div>
)
}

export default List