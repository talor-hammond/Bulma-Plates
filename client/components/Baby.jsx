import React from 'react'

const Baby = props => {   
    const fill = 'Blue'
    
        return (
        <g>
            <circle style={{fill: (fill)}} cx={props.cx} cy={props.cy} r={props.r}  />
        </g>
       
        )
}

export default Baby