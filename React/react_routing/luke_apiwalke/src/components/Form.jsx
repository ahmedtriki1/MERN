import React, { useState }  from 'react'

import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const [starwarsId, setstarwarsID] = useState(1);
    const [starwarstype, setstarwarstype] = useState("");
    const nav = useNavigate();

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(starwarsId);
        nav(`/${starwarstype}/${starwarsId}`)

    }
    return (
    <div>
        <form id='type' onSubmit={submitHandler} >
        Search for:
            <select name="type" form='type' onChange={(e)=>{ setstarwarstype(e.target.value)}} value={starwarstype}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
        ID: <input type="number" onChange={(e)=>{ setstarwarsID(e.target.value)}} value={starwarsId} />
            <button>Search</button>
        </form>

    </div>
    )
}
export default Form