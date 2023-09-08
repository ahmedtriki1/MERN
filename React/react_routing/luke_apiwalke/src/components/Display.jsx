import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useParams, useNavigate} from 'react-router-dom'


const Hero = (props) => {
    const [star, setstar] = useState(null);
    const {type,id} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}`)
        .then((apiResponse)=>{
            console.log(apiResponse.data);
            setstar(apiResponse.data)
        })
        .catch((err)=>{
            navigate("/ErrorNotFound", {replace:true})
        })

    },[id, navigate,type])
    return (
    <>
        {star ? <>
        <h1>{star.name}</h1>
        {type === "planets" ? <><p>Climate: {star.climate}</p><p>Terrain: {star.terrain}</p><p>Surface Water: {star.surface_water}</p><p>Population: {star.population}</p></> : ""}
        {type === "people" ? <><p>Height: {star.height}</p><p>Mass: {star.mass}</p><p>Hair Color: {star.hair_color}</p><p>Skin Color: {star.skin_color}</p></> : ""}
        </>: <p>Loading ...</p> }

    </>
    )
}

export default Hero