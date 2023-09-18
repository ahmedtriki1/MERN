import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams, useNavigate} from "react-router-dom"

const Update = (props) => {
const {id} = useParams();
const nav = useNavigate();
const [Name, setName] = useState("")

const [errors, setErrors] = useState([]); 
const [error, setError] = useState({Name:false})

const validateName = (e) =>{
    setName(e.target.value)

    if(e.target.value.length < 3){
        setError({Name:true})
    }else{
        setError({Name:false});
    }
}
    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/Authors/"+id)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.Authors.Name)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

    const handleForm = (e) =>{
    e.preventDefault();
    
    // console.log(title, genre, episodes);
    const updatedShow = {
        Name
    }
    // nav("/")
    // send it to the server
    
    axios.put("http://localhost:8000/api/Authors/"+id, updatedShow)
    .then((response)=>{
        console.log(response.data);
        nav("/")
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
        <h2>Edit This author</h2>
        {/* update form */}
        <form onSubmit={handleForm}>
        <label >Name:</label>
            <br />
             {/* <input onChange={(e)=>{setName(e.target.value)}} value={Name}/> */}
            <input onChange={(e)=>{validateName(e)}} value={Name} /> <br />
             {/* {error.Name ?  <p style={{color:"red"}}>That field must be least than 3!</p>: ""} */}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <br />
                <br />
                <button type='reset' onClick={()=> nav('/')}>Cancel</button><button type='submit'>Submit</button>
        </form>
    </div>
    )
}

export default Update