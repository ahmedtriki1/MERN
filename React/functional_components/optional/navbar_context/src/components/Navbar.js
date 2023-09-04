import React,{useContext} from 'react'
import {MyContext} from '../App'

function Navbar() {
    const [Name,setName] = useContext(MyContext);
    return (
    <div>
    <h1>{Name}</h1>
    </div>
)
}

export default Navbar