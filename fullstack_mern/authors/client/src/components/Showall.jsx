import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Show = (props) => {
    const [shows, setShows] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/Authors")
        .then((serverResponse)=>{
            console.log(serverResponse.data);
            setShows(serverResponse.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[props.refresh])

  // delete function
    const deleteShow = (id) =>{
    axios.delete("http://localhost:8000/api/Authors/"+id)
    .then((res)=>{
        // TODO !!
        setShows(shows.filter((oneShow)=>{
            return (oneShow._id !== id)
        }))
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err)
    })
}
    return (
    <div>
        <Link to="/new">add an author</Link>
        <h2>We have quotes by:</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>Authors</th>
                    <th>Actions available</th>
                </tr>
            </thead>
            <tbody>
                {shows.map((oneShow)=>{
                    return(
                        <tr key={oneShow._id}>
                            <td><Link to={`Authors/${oneShow._id}`}>{oneShow.Name}</Link></td>
                            <td>
                            <Link to={`Authors/edit/${oneShow._id}`} > edit </Link>
                            <button onClick={() => deleteShow(oneShow._id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Show