import React, { useState }from 'react'

function MoreForms() {   
    const [First_Name, setFirst_Name] = useState("");
    const [Last_Name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [Confirm_password, setConfirmPassword] = useState(""); 

    const [error, setError] = useState({First_Name:false,Last_Name:false,email:false,password:false,Confirm_password:false})

    const validateFirst_Name = (e) =>{
        setFirst_Name(e.target.value)

        if(e.target.value.length < 2){
            setError({First_Name:true})
        }else{
            setError({First_Name:false});
        }

    }
    const validateLast_Name = (e) =>{
        setLast_Name(e.target.value)

        if(e.target.value.length < 2){
            setError({Last_Name:true})
        }else{
            setError({Last_Name:false});
        }

    }
    const validateEmail= (e) =>{
        setEmail(e.target.value)

        if(e.target.value.length < 5){
            setError({email:true})
        }else{
            setError({email:false});
        }
    }
    const validatePassword= (e) =>{
        setPassword(e.target.value)

        if(e.target.value.length < 8 ){
            setError({password:true})
        }else{
            setError({password:false});
        }
    }
    const validateConfirm_Password= (e) =>{
        setConfirmPassword(e.target.value)

        if(e.target.value.length < 8 ){
            setError({Confirm_password:true})
        }else{
            setError({Confirm_password:false});
        }
    }
    return (
    <div>
    <form >
            <div>
                <label>First_Name: </label> 
                <input onChange={(e)=>{validateFirst_Name(e);}}  /> <br />
            {error.First_Name ?  <p style={{color:"red"}}>That field must be least than 2!</p>: ""}
            </div>
            <div>
                <label>Last_Name: </label> 
                <input onChange={(e)=>{validateLast_Name(e);}}  /> <br />
            {error.Last_Name ?  <p style={{color:"red"}}>That field must be least than 2!</p>: ""}
            </div>
            <div>
                <label>Email: </label> 
                <input onChange={(e)=>{validateEmail(e);}}  /> <br />
            {error.email ?  <p style={{color:"red"}}>That field must be least than 5!</p>: ""}
            </div>
            <div>
                <label>Password: </label>
                <input onChange={(e)=>{validatePassword(e);}}  /> <br />
            {error.password ?  <p style={{color:"red"}}>That field must be least than 8!</p>: ""}
            </div>
            <div>
                <label>Confirm_password: </label>
                <input type="text" onChange={ (e) =>validateConfirm_Password(e) } />
                {error.Confirm_password ?  <p style={{color:"red"}}>Password must match!</p>: ""}
            </div>
            <input type="submit" value="Create User" />
    </form>
            <h4>First Name:{First_Name}</h4>
            <h4>Last Name:{Last_Name}</h4>
            <h4>Email:{email}</h4>
            <h4>Password:{password}</h4>
            <h4>Confirm Password{Confirm_password}</h4>
            </div>
    )

}
export default MoreForms