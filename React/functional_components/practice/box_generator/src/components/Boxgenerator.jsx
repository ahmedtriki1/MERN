import React from 'react'

function Boxgenerator(props) {
    return (
    
    <div style={{backgroundColor:props.color.color,width:props.color.width+'px',height:props.color.width +'px'}}></div>
    )
}

export default Boxgenerator