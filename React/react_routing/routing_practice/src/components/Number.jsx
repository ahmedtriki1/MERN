import React from 'react'
import {useParams} from 'react-router-dom'

const Number = () => {
    const {num} = useParams();
    return (
    <div>
        <p>{isNaN(num)?<p>The word is : {num}</p>:<p>The number is : {num}</p>}</p>
    </div>
    )
}

export default Number