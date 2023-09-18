import React from 'react'
import {useState} from "react"
import axios from "axios"
import { useNavigate,Link} from "react-router-dom"
const Update = (props) => {
    const [Name, setName] = useState("")
    const nav = useNavigate();
    const [error, setError] = useState({Name:false})
    const [errors, setErrors] = useState([]); 
    const validateName = (e) =>{
        setName(e.target.value)

        if(e.target.value.length < 3){
            setError({Name:true})
        }else{
            setError({Name:false});
        }

    }
    const handleForm = (e) =>{
    e.preventDefault();
    const updatedShow = {
        Name
    }
    
    // send it to the server
    
    axios.post("http://localhost:8000/api/Authors/", updatedShow)
    .then((response)=>{
        // console.log(response.data);
        setName("")
    //    nav("/")
        props.setrefresh(updatedShow)
    })
    // .catch((err)=>{
    //     console.log("❌❌❌ Something Went Wrong", err);
    // })
    .catch(err=>{
        console.log(err)
        const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
        console.log(errorResponse);
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })       
    }
    return (
    <div>
        <Link to="/">Home</Link>
            <p>Add a new author:</p>
        <form onSubmit={handleForm}>
            <label >Name:</label>
            <br />
             {/* <input onChange={(e)=>{setName(e.target.value)}} value={Name}/> */}
                <input onChange={(e)=>{validateName(e) }}  value={Name}/> <br />
             {/* {error.Name ?  <p style={{color:"red"}}>That field must be least than 3!</p>: ""} */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <br />
            <button type='reset' onClick={()=> nav('/')}>Cancel</button><button type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default Update