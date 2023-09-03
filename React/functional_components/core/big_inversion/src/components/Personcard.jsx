import React from 'react'

function Personcard(props) {

    const {firstName,lastName,age,haircolor} = props.person;
    return (
        <div>
        <h1>{firstName}, {lastName}</h1>
        <p>age:{age}</p>
        <p>Hair Color:{haircolor}</p>
        </div>
    )
}

export default Personcard