import React, { useContext } from 'react'
import {MyContext} from '../App'

function Form() {
    const [Name, setName] = useContext(MyContext);
    return (
    <div>
        <form >
            <label >Your Name: </label>
            <input onChange={(e)=>{setName(e.target.value)}}  name='Name' value={Name}/>
        </form>
    </div>
)
}

export default Form