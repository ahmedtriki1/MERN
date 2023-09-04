import React,{useState} from 'react'
function Hook() {
        const [First_Name, setFirst_Name] = useState("");
        const [Last_Name, setLast_Name] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");  
        const [Confirm_password, setConfirmPassword] = useState(""); 
    return (
    <div>
    <form >
            <div>
                <label>First_Name: </label> 
                <input type="text" onChange={ (e) => setFirst_Name(e.target.value) } />
            </div>
            <div>
                <label>Last_Name: </label> 
                <input type="text" onChange={ (e) => setLast_Name(e.target.value) } />
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm_password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
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
export default Hook