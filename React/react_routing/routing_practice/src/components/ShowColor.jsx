import React from 'react'
import {useParams} from 'react-router-dom'
const ShowColor = () => {
    const {word,color1,color2} = useParams();
    return (
    <div>
        <p style={{backgroundColor:color2,color:color1}}>The word is:{word}</p>
    </div>
    )
}

export default ShowColor